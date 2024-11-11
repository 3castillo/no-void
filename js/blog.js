

let stories = []; // Array para guardar las historias

// Manejador de evento para enviar el formulario de historia
document.getElementById("form-story-input").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var story = document.getElementById("story").value;

    if (story) {
        // Guardar la historia en el array
        stories.push(story);

        // Limpiar el área de texto
        document.getElementById("story").value = "";
        alert("Story shared successfully");
    }
});

// Manejador de evento para ver historias compartidas
document.getElementById("view-stories-link").addEventListener("click", function() {
    // Mostrar la lista de historias
    var storyListSection = document.getElementById("story-list");
    storyListSection.innerHTML = '<h2 style="color: white;">Shared Stories:</h2>'; // Reiniciar el contenido

    if (stories.length > 0) {
        stories.forEach(function(story, index) {
            var storyDiv = document.createElement("div");
            storyDiv.className = "story";
            storyDiv.textContent = story;

            // Crear un div para los botones de compartir y eliminar
            var buttonDiv = document.createElement("div");
            buttonDiv.className = "story-buttons";
            
            // Aqui se crea el Botón de compartir
            var shareButton = document.createElement("button");
            shareButton.textContent = "Share";
            shareButton.className = "btn-compartir";
            shareButton.onclick = function() {
                alert("Shared Story: " + story);
            };

            // Aqui se crea el Botón de eliminar
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "btn-eliminar";
            deleteButton.onclick = function() {
                stories.splice(index, 1); // Eliminar la historia del array
                storyDiv.remove(); // Remover el div de la historia
            };

            buttonDiv.appendChild(shareButton);
            buttonDiv.appendChild(deleteButton);
            storyDiv.appendChild(buttonDiv);
            storyListSection.appendChild(storyDiv);

            // Añadir una línea divisoria entre las historias
            var hr = document.createElement("hr");
            hr.style.border = "1px solid #ccc"; // Personaliza el estilo de la línea
            storyListSection.appendChild(hr);

            // Crear un formulario de comentarios
            var commentForm = document.createElement("div");
            commentForm.className = "comment-form";
            
            // Aqui se crea el boton comment
            commentForm.innerHTML = `
                <textarea placeholder="Add a comment..."></textarea>
                <button class="btn-comment" type="button">Comment</button> 
            `;

            // Añadir el formulario de comentarios a la historia
            storyDiv.appendChild(commentForm);

            // Crear un contenedor para los comentarios
            var commentList = document.createElement("div");
            commentList.className = "comment-list";

            // Añadir el contenedor de comentarios a la historia
            storyDiv.appendChild(commentList);

            // Manejar la adición de comentarios
            commentForm.querySelector("button").addEventListener("click", function() {
                var commentText = commentForm.querySelector("textarea").value;
                if (commentText) {
                    var commentDiv = document.createElement("div");
                    commentDiv.className = "comment";
                    commentDiv.textContent = commentText;
                    commentList.appendChild(commentDiv);
                    commentForm.querySelector("textarea").value = ""; // Limpiar el área de texto
                }
            });
        });
        storyListSection.style.display = "block"; // Mostrar la sección de historias
    } else {
        storyListSection.innerHTML += "<p style='color: white;'>There are no shared stories yet.</p>";
        storyListSection.style.display = "block"; // Mostrar la sección de historias
    }

    // Ocultar el formulario de compartir historia
    document.getElementById("form-story").style.display = "none";
});

// Manejador de evento para compartir una nueva historia
document.getElementById("share-story-link").addEventListener("click", function() {
    // Ocultar la lista de historias
    document.getElementById("story-list").style.display = "none";

    // Mostrar el formulario de compartir historia
    document.getElementById("form-story").style.display = "block";
});

// Manejador de evento para regresar a la página principal
document.getElementById("web").addEventListener("click", function() {
    window.location.href = "index.html";
});
