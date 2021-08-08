function start() {
    document.getElementById("question").onclick = () => {
        document.getElementById("hourlyRate").classList.add("d-none");
    }

    document.getElementById("comment").onclick = () => {
        document.getElementById("hourlyRate").classList.add("d-none");
    }

    document.getElementById("hiring").onclick = () => {
        document.getElementById("hourlyRate").classList.remove("d-none");
    }
}

window.onload = start();