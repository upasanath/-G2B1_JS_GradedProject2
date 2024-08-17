let applicants = [];
let currentIndex = 0;

fetch('data/applicants.json')
    .then(response => response.json())
    .then(data => {
        applicants = data;
        displayApplicant(currentIndex);
    });

function displayApplicant(index) {
    const applicant = applicants[index];
    document.getElementById('applicantName').textContent = applicant.name;
    document.getElementById('applicantJob').textContent = applicant.jobTitle;
    document.getElementById('applicantEmail').textContent = applicant.email;
    document.getElementById('applicantExperience').textContent = applicant.experience;

    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'block';
    document.getElementById('nextBtn').style.display = index === applicants.length - 1 ? 'none' : 'block';
}

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        displayApplicant(currentIndex);
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentIndex < applicants.length - 1) {
        currentIndex++;
        displayApplicant(currentIndex);
    }
});

document.getElementById('searchBtn').addEventListener('click', function() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredApplicants = applicants.filter(applicant => 
        applicant.jobTitle.toLowerCase().includes(searchValue)
    );

    if (filteredApplicants.length > 0) {
        applicants = filteredApplicants;
        currentIndex = 0;
        displayApplicant(currentIndex);
    } else {
        document.getElementById('errorMsg').textContent = "Invalid search or No applications for this job";
        document.getElementById('applicantDetails').style.display = 'none';
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
    }
});
