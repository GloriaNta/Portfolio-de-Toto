// Datas

const quiz = [
	{
		question: 'Inside which HTML element do we put the JavaScript ?',
		response: ['&lt;js>', '&lt;scripting>', '&lt;javascript>', '&lt;script>'],
		good: 3,
	},
	{
		question: 'What is the correct JavaScript syntax to change the content of the HTML element ? &lt;p id="demo">This is a demonstration.&lt;/p>',
		response: [
			'#demo.innerHTML = "Hello World!";',
			'document.getElementById("demo").innerHTML = "Hello World!";',
			'document.getElement("p").innerHTML = "Hello World!";',
			'document.getElementByName("p").innerHTML = "Hello World!";',
		],
		good: 1,
	},
	{
		question: 'How do you create a function in JavaScript ?',
		response: ['function myFunction()', 'function:myFunction()', 'function = myFunction()'],
		good: 0,
	},
];

// --- Generer le formulaire

let template;

	// passer en revue le tableau quizz et afficher la question

	for (let i = 0; i < quiz.length; i++) {

		let template = `<div class="question pt-2 mt-3"> 
		<h5 class="py-2"> ${quiz[i].question} </h5></div>`;
		// ${quiz[i].question} ===> + quiz[i].question +
	

		// affichage des réponses
		for (let j = 0; j < quiz[i].response.length; j++) {

			template += `<div class="form-check">
            <input class="form-check-input" type="radio" id="r10" name="response1" />
            <label class="form-check-label" for="r10">
            ${quiz[i].response[j]} </label></div>`;

		}

		template += '</div>';
		document.getElementById('quiz').innerHTML += template;
	};

	
			


	

	

// --- Compter les bonnes réponses


// --- Afficher le score final





/*----------------------------------------------------------------

<div class="question pt-2 mt-3">
            <h5 class="py-2">Q. what is the good response ?</h5>
            
              <div class="form-check">
                <input class="form-check-input" type="radio" id="r10" name="response1" />
                <label class="form-check-label" for="r10">
                  Réponse A
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="radio" id="r11" name="response1" />
                <label class="form-check-label" for="r11">
                  Réponse B
                </label>
              </div>
          
        </div>
        <div class="question pt-2 mt-3">
          <h5 class="py-2">Q. what is the good response ?</h5>
            <form>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="r20" name="response2">
              <label class="form-check-label" for="r20">
                Réponse A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="r21" name="response2">
              <label class="form-check-label" for="r21">
                Réponse B
              </label>
            </div>
          </form>
        </div>
    </div>*/