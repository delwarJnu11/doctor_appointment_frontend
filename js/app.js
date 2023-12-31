const loadServices = () => {
  fetch("https://testing-8az5.onrender.com/services/")
    .then((res) => res.json())
    .then((data) => displayServices(data))
    .catch((err) => console.error(err));
};

const serviceContainer = document.getElementById("service_container");

const displayServices = (services) => {
  services.forEach((service) => {
    li = document.createElement("li");
    li.classList.add("slide-visible");
    li.innerHTML = `
              <div class="card shadow h-100 cards">
                <div class="ratio ratio-16x9">
                  <img
                    src="${service?.image}"
                    class="card-img-top"
                    loading="lazy"
                    alt="..."
                  />
                </div>
                <div class="card-body p-3 p-xl-5">
                  <h3 class="card-title h5">${service?.name}</h3>
                  <p class="card-text">
                    ${service?.description.slice(0, 140)}
                  </p>
                  <div>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
    `;
    serviceContainer.append(li);
  });
};
const loadDoctors = () => {
  fetch("https://testing-8az5.onrender.com/doctor/list/")
    .then((res) => res.json())
    .then((data) => displayDoctors(data.results))
    .catch((err) => console.error(err));
};
const doctorsContainer = document.getElementById("doctors");
const displayDoctors = (doctors) => {
  doctors.forEach((doctor) => {
    const card = document.createElement("div");
    card.classList.add("doctor_card");
    card.innerHTML = `
            <img class="image" src="${doctor.image}" alt="doctor" />
            <h4 class="doctor_name">${doctor.full_name}</h4>
            <h6 class="specialist">${doctor.designation[0]}</h6>
            <p class="doctor_des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                corrupti?
            </p>
            <button class="btn btn-primary">Details</button>`;
    doctorsContainer.appendChild(card);
  });
};

const loadDesignation = () => {
  fetch("https://testing-8az5.onrender.com/doctor/designation/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const parent = document.getElementById("designation");
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerText = item.name;
        parent.appendChild(li);
      });
    })
    .catch((err) => console.error(err));
};
const loadSpecialization = () => {
  fetch("https://testing-8az5.onrender.com/doctor/specialization/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const parent = document.getElementById("specialization");
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerText = item.name;
        parent.appendChild(li);
      });
    })
    .catch((err) => console.error(err));
};

loadServices();
loadDoctors();
loadDesignation();
loadSpecialization();
