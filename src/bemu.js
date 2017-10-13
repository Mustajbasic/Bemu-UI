function Bemu() {
    let dropdownList = [];
    let dropdownListOnlyIds = []
    let sidenav = {};
    let public = {};
    let numberOfShownDropdowns = 0;
    let closeDropdown = function (id) {
        for (let i = 0; i < dropdownList.length; i++) {
            if (dropdownList[i].getId() == id) {
                dropdownList[i].close();
            }
        }
    }
    public.addSideNavigation = function (id, courtain) {
        sidenav = BemuSideNavigation(id, courtain);

    }
    public.toggleSideNav = function() {
        sidenav.toggle();
    }
    public.addDropdown = function (id) {
        dropdownList.push(BemuDropdown(id));
        dropdownListOnlyIds.push(id);
        window.onclick = function (event) {
            for (let i = 0; i < dropdownListOnlyIds.length; i++) {
                if (!event.target.matches('#' + dropdownListOnlyIds[i])) {
                    closeDropdown(dropdownListOnlyIds[i]);
                }
            }
        }
    }
    public.toggleDropdown = function (id) {
        for (let i = 0; i < dropdownList.length; i++) {
            if (dropdownList[i].getId() == id) {
                if (dropdownList[i].toggleDropdown()) {
                    numberOfShownDropdowns++;
                }
                else {
                    numberOfShownDropdowns--;
                }
            }
        }
    }
    public.closeAllDropdowns = function () {
        if (numberOfShownDropdowns > 0) {
            for (let i = 0; i < dropdownList.length; i++) {
                if (dropdownList[i].isShown()) {
                    dropdownList[i].toggleDropdown(dropdownList[i].getId());
                }
            }
            numberOfShownDropdowns = 0;
        }
    }
    return public;
}

function BemuDropdown(idParam) {
    let id = idParam;
    let dropdown = document.getElementById(id);
    let dropdownInner = dropdown.getElementsByClassName('dropdown-list')[0];
    let dropdownShownStatus = false;
    let public = {};
    public.toggleDropdown = function () {
        if (dropdownShownStatus) {
            dropdownInner.className = "dropdown-list hide";
            dropdownShownStatus = false;
        }
        else {
            dropdownInner.className = "dropdown-list";
            dropdownShownStatus = true;
        }
        return dropdownShownStatus;
    };
    public.close = function () {
        dropdownShownStatus = false;
        dropdownInner.className = "dropdown-list hide";
    }
    public.isShown = function () {
        return dropdownShownStatus;
    };
    public.getId = function () {
        return id;
    };
    return public;
}

function BemuSideNavigation(idParam, courtainParam) {
    let id = idParam;
    let courtainId = courtainParam;
    let sidenav = document.getElementById(id);
    let courtain = document.getElementById(courtainId);
    let isOpen = false;
    
    let public = {};
    courtain.onclick = function() {
        public.toggle();
    }
    public.toggle = function() {
        sidenav.classList.toggle('sidenav-hidden');
        
        if(isOpen) {
            courtain.classList.toggle('courtain-hidden');
            setTimeout(courtain.classList.toggle('hide'),100)
        }
        else {
            courtain.classList.toggle('hide');
            courtain.classList.toggle('courtain-hidden');
        }
        
        
    }
    
    return public;
}