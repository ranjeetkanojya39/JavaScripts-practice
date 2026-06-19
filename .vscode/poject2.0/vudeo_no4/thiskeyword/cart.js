       function getUser() {
            fetch("https://randomuser.me/api/?results=3")
                .then((res) => res.json())
                .then((data) => {
                    const userContainer = document.querySelector(".user");

                    userContainer.innerHTML = "";

                    data.results.forEach((user) => {
                        userContainer.innerHTML += `
                            <div class="card">
                                <img src="${user.picture.large}" alt="User Avatar">
                                <h2>${user.name.first} ${user.name.last}</h2>
                                <p class="role">Full Stack Developer</p>
                                <p>${user.email}</p>
                                <p>📍 ${user.location.city}, ${user.location.country}</p>
                                <button>View Profile</button>
                            </div>
                        `;
                    });
                })
                .catch((err) => {
                    console.log("Error:", err);
                });
        }

        getUser();  // ths nd