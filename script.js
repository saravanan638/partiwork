document.addEventListener("DOMContentLoaded", function () {
    // Check if job data is available in local storage (for simplicity)
    const jobData = localStorage.getItem("jobData");
    if (jobData) {
      displayJobDetails(JSON.parse(jobData));
    }
  
    const jobPostForm = document.getElementById("jobPostForm");
    const applyForm = document.getElementById("applyForm");
  
    if (jobPostForm) {
      jobPostForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(jobPostForm);
        const job = {
          title: formData.get("jobTitle"),
          description: formData.get("jobDescription"),
        };
        localStorage.setItem("jobData", JSON.stringify(job));
        displayJobDetails(job);
      });
    }
  
    if (applyForm) {
      applyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(applyForm);
        // Handle form submission or send data to the server (using AJAX, for example)
        console.log("Applicant Name:", formData.get("applicantName"));
        console.log("Email:", formData.get("applicantEmail"));
        // You can retrieve and handle other form data here as well.
        alert("Application submitted!");
      });
    }
  
    function displayJobDetails(job) {
      const jobDetailsContainer = document.getElementById("jobDetails");
      if (jobDetailsContainer) {
        jobDetailsContainer.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.description}</p>
        `;
      }
    }
  });