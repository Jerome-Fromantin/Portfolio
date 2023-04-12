function showOrCloseServices() {
    downArrow = document.getElementById("arrow-down-serv");
    upArrow = document.getElementById("arrow-up-serv");
    el = document.getElementById("ulServicesToOpen");
    el.style.display = (el.style.display == "block") ? "none" : "block";
    if (el.style.display == "block") {
        downArrow.style.display = "none";
        upArrow.style.display = "inline"
    }
    else {
        downArrow.style.display = "inline";
        upArrow.style.display = "none"
    }
}

function showOrCloseCompetences() {
    downArrow = document.getElementById("arrow-down-comp");
    upArrow = document.getElementById("arrow-up-comp");
    el1 = document.getElementById("divDevWebToOpen");
    el1.style.display = (el1.style.display == "block") ? "none" : "block";
    el2 = document.getElementById("divInformatiqueToOpen");
    el2.style.display = (el2.style.display == "block") ? "none" : "block";
    el3 = document.getElementById("divLanguesToOpen");
    el3.style.display = (el3.style.display == "block") ? "none" : "block";
    el4 = document.getElementById("divSoftSkillsToOpen");
    el4.style.display = (el4.style.display == "block") ? "none" : "block";
    if (el1.style.display == "block") {
        downArrow.style.display = "none";
        upArrow.style.display = "inline"
    }
    else {
        downArrow.style.display = "inline";
        upArrow.style.display = "none"
    }
}

function showOrCloseEasterEgg() {
    el = document.getElementById("divEasterToOpen");
    el.style.display = (el.style.display == "flex") ? "none" : "flex"
}

function showOrCloseInfos() {
    downArrow = document.getElementById("arrow-down-infos");
    upArrow = document.getElementById("arrow-up-infos");
    el = document.getElementById("ulInfosToOpen");
    el.style.display = (el.style.display == "block") ? "none" : "block";
    if (el.style.display == "block") {
        downArrow.style.display = "none";
        upArrow.style.display = "inline"
    }
    else {
        downArrow.style.display = "inline";
        upArrow.style.display = "none"
    }
}