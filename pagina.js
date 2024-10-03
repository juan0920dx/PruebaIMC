const resultado = document.getElementById('resultado-clasificacion');
const barraCalor = document.getElementById('barra-calor');
const dietaRecomendada = document.getElementById('dieta-recomendada'); // Nuevo elemento

// Inicializar el resultado y la clasificación por defecto
resultado.innerHTML = `Tu IMC es: 0.00.<br>Clasificación: No calculado.`;
dietaRecomendada.innerHTML = ""; // Limpiar la dieta recomendada por defecto

// Función para calcular IMC
function calcularIMC() {
    // Obtener valores
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('Estatura').value);

    // Validar que los valores ingresados sean positivos y válidos
    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert("Por favor, ingresa valores válidos y mayores a cero.");
        return; // Termina la función si los datos son inválidos
    }

    // Calcular IMC
    const imc = (peso / (estatura ** 2)).toFixed(2);

    // Clasificación y posición para la barra de calor
    let clasificacion;
    let posicion;
    let dieta;
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
        posicion = -5;
        dieta = "Te encuentras en bajo peso y deberas aumentar el consumo de calorías con alimentos nutritivos. Incluye más proteínas, carbohidratos saludables y grasas saludables en tu dieta";
    } else if (imc < 25) {
        clasificacion = 'Normal';
        posicion = 40;
        dieta = "Tu clasificación es normal por eso es recomendable mantener una dieta equilibrada. Incluye frutas, verduras, proteínas magras y granos enteros.";
    } else if (imc < 30) {
        clasificacion = 'Sobrepeso';
        posicion = 70;
        dieta = "Estas en sobrepeso y deberas reducir el consumo de azúcares y grasas saturadas. Incluir más actividad física y una dieta rica en frutas, verduras y proteínas magras.";
    } else {
        clasificacion = 'Obesidad';
        posicion = 95;
        dieta = "Tu estado es obesidad y se recomienda consultar a un nutricionista para un plan de dieta específico. Generalmente, se recomienda reducir calorías y enfocarse en alimentos integrales, frutas, verduras y proteínas magras.";
    }

    // Definir emojis según la clasificación
    let emoji;
    if (clasificacion === "Bajo peso") {
        emoji = "😢";
    } else if (clasificacion === "Normal") {
        emoji = "😁";
    } else if (clasificacion === "Sobrepeso") {
        emoji = "😰";
    } else if (clasificacion === "Obesidad") {
        emoji = "😭";
    }

    // Mostrar los resultados en la página con el emoji
    resultado.innerHTML = `Tu IMC es: ${imc} <br> Clasificación: ${clasificacion}`;
    barraCalor.innerHTML = `<span style="left: ${posicion}%; transform: translateX(-20%);">${emoji}</span>`;
    dietaRecomendada.innerHTML = dieta; // Mostrar la dieta recomendada
}

// Función para reiniciar el formulario y los resultados
function reiniciar() {
    // Resetear los campos del formulario
    document.getElementById('imcFormulario').reset();
    
    // Restablecer el resultado, la dieta recomendada y limpiar la barra de calor
    resultado.innerHTML = `Tu IMC es: 0.00.<br>Clasificación: No calculado.`;
    dietaRecomendada.innerHTML = ""; // Limpiar la dieta recomendada
    barraCalor.innerHTML = ''; // Limpiar la barra de calor
}
