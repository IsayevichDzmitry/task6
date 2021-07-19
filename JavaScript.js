
jQuery(document).ready(function () {

    let trueCount = 0;
    let falseCount = 0;
    let div = document.querySelector("#result");
  
     $('<table id = "table1"><tr><th id = "output">Итого:</th><tr></table>').prependTo('#result');
    

    $("#btn_1").click(() => {    

        function test() {
            var d = $.Deferred();
            
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; 
            }

            const randNumb = getRandomInt(0, 2);

            console.log(randNumb);

            if (randNumb) {
                setTimeout(function () {
                    d.resolve();

                }
                , 2000);
            }
            else {
                setTimeout(function () { d.reject(); }, 2000);
            }         
            return d.promise();
        };

        let a = test().done(() => {
            console.log("Успех");
            trueCount++;
            const a = "Успех";
            $(`<tr><td class ="trueResult">${a}</td></tr>`).appendTo('#table1');

        }
        ).fail(() => {
            console.log("Провал");
            falseCount++;
            const a = "Провал";
            $(`<tr><td class ="falseResult">${a}</td></tr>`).appendTo('#table1');
        }
        ).always(() => {

            $("div").find("#output")[0].innerHTML = `Итого:${Math.round(trueCount/(trueCount+falseCount)*100)}`;

            console.log(`успешно: ${trueCount}  не успешно ${falseCount} `);
        }
        );      

    }
    )
});

