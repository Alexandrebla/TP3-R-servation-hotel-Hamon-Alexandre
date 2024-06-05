function increment(fieldId) {
    var field = document.getElementById(fieldId);
    field.value = parseInt(field.value) + 1;
    updateSummary();
}

function decrement(fieldId) {
    var field = document.getElementById(fieldId);
    var value = parseInt(field.value);
    if (value > 0) {
        field.value = value - 1;
        updateSummary();
    }
}

function updateSummary() {
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var rooms = document.getElementById("rooms").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var checkOutDate = document.getElementById("checkOutDate").value;
    var childAge = document.getElementById("childAge").value;
    var businessTrip = document.getElementById("businessTrip").checked ? "Oui" : "Non";

    document.getElementById("displayAdults").textContent = adults;
    document.getElementById("displayChildren").textContent = children;
    document.getElementById("displayRooms").textContent = rooms;
    document.getElementById("displayBusinessTrip").textContent = businessTrip;
    document.getElementById("displayDates").textContent = checkInDate + " - " + checkOutDate;

    if (children > 0) {
        document.getElementById("displayChildAges").style.display = "block";
        document.getElementById("displayChildAges").textContent = childAge; 
    } else {
        document.getElementById("displayChildAges").style.display = "none";
    }
    var stayLocation = document.getElementById("stayLocation").value;

document.getElementById("displayStayLocation").textContent = stayLocation;

}

function submitForm() {
    document.getElementById("userInputPanel").style.display = "block";
    
        var checkInDate = document.getElementById("checkInDate").value;
        var checkOutDate = document.getElementById("checkOutDate").value;
    
    
        if (checkOutDate < checkInDate) {
            alert("La date de fin de séjour ne peut pas être antérieure à la date de début de séjour.");
            return; 
        }
    
        
        document.getElementById("userInputPanel").style.display = "block";
    }
    
function clearForm() {
    document.getElementById("adults").value = "0";
    document.getElementById("children").value = "0";
    document.getElementById("rooms").value = "0";
    document.getElementById("checkInDate").value = "";
    document.getElementById("checkOutDate").value = "";
    document.getElementById("childAge").value = "";
    document.getElementById("businessTrip").checked = false;
    updateSummary(); 
}

function createChildAgeField() {
    var childrenCount = parseInt(document.getElementById("children").value);
    var childAgeInputsContainer = document.getElementById("childAgeInputs");

    
    childAgeInputsContainer.innerHTML = "";

    for (var i = 1; i <= childrenCount; i++) {
        var label = document.createElement("label");
        label.textContent = "Âge de l'enfant " + i + ":";
        var input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "17"; 
        input.name = "childAge" + i;
        input.oninput = updateSummary;

        var br = document.createElement("br");

        childAgeInputsContainer.appendChild(label);
        childAgeInputsContainer.appendChild(input);
        childAgeInputsContainer.appendChild(br);
    }
    childAgeInputsContainer.style.display = "block";
}

