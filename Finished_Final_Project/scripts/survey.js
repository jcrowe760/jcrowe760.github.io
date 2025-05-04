document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("surveyForm");
    const responseDiv = document.getElementById("response");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get("name");
      const language = formData.get("recipe");
      responseDiv.innerHTML = `<p>Thank you, ${name}. Your favorite recipe was the ${language}.</p>`;
      
    });
  });
