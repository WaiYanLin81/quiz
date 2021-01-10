
    function  reload() {
        location.reload();
    }
    function  Question(question,answer,correct) {
        this.question = question;
        this.answer =  answer;
        this.correct = correct;

    }
    Question.prototype.showQuestion = function(){
        let result='';
        result += `<h4>${this.question}</h4>`;
        for(let i=0;i < this.answer.length;i++){
            result += `<label>${this.answer[i]}</label>
                    <input type="checkbox" class="d-block mb-2 check-box" value="${i}">`
        }
        document.getElementsByClassName("question")[0].innerHTML = result;
    }
    Question.prototype.answerQuestion = function(){
        let correct = this.correct;
        console.log(correct)
        const  checkBoxes =   document.querySelectorAll(".check-box");
        checkBoxes.forEach((checkBox)=>{
            if(checkBox.checked){
                if(parseInt(checkBox.value) == correct){
                    document.querySelector("#alert-answer").innerHTML =
                        `  <div class="alert alert-success" role="alert">
                         Good Job!          
                    </div>`
                }else{
                    document.querySelector("#alert-answer").innerHTML =
                        `  <div class="alert alert-danger" role="alert">
                         Try Again!          
                    </div>`
                }
            }
        })
    }

    let q1 = new Question('What does HTML stand for?',
        ['Hyper Tool Market language',
            'Hyper Text Market Language',
            'Hyper links and Text Market Language'],1);
    let q2 = new Question('Which character is used to indicate an end tag?',
        ['<','*','/'],2);
    let q3 = new  Question('How can you open a link in a new tab/browser window?',
        ["(a href=)","target_blank"],1);

    let questionList = [q1,q2,q3];
    let randomQuestion = Math.floor(Math.random() * questionList.length);
    questionList[randomQuestion].showQuestion();

    let checkBoxes = document.querySelectorAll(".check-box");
    console.log(checkBoxes.length);


    checkBoxes.forEach((checkBox)=>{
        checkBox.addEventListener("click",(el)=>{
            for(let i=0; i < checkBoxes.length;i++){
                document.getElementsByClassName("check-box")[i].checked = false;
                // el.target.checked = true;
            }
            el.target.checked = true;
        })
    })

    document.getElementsByClassName("check")[0]
        .addEventListener("click",(e)=>{
            e.preventDefault();
            questionList[randomQuestion].answerQuestion();
        });