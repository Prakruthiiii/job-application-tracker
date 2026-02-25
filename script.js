let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function saveToLocalStorage() {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

function renderJobs() {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = "";

    jobs.forEach((job, index) => {
        jobList.innerHTML += `
            <tr>
                <td>${job.company}</td>
                <td>${job.role}</td>
                <td>${job.date}</td>
                <td>${job.status}</td>
                <td>
                    <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addJob() {
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if (company === "" || role === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    jobs.push({ company, role, date, status });
    saveToLocalStorage();
    renderJobs();

    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
    document.getElementById("date").value = "";
}

function deleteJob(index) {
    jobs.splice(index, 1);
    saveToLocalStorage();
    renderJobs();
}

renderJobs();
