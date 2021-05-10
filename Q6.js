function addVaccine(id, refreshCallback)
{
    refreshCallback();  
}

function refreshVaccineList() {
    document.write("Welcome to Vaccination Centre");
}

addVaccine(1, refreshVaccineList);