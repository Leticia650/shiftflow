// /* =========================
// ELEMENTOS DA PRODUÇÃO
// ========================= */

// const plannedInput =

// document.querySelector(
//     "#planned"
// );

// const producedInput =

// document.querySelector(
//     "#produced"
// );

// const progressBar =

// document.querySelector(
//     "#progress-bar"
// );

// const progressValue =

// document.querySelector(
//     "#progress-value"
// );

// const halfMessage =

// document.querySelector(
//     "#half-message"
// );

// /* =========================
// CÁLCULO DO PROGRESSO
// ========================= */

// function updateProgress() {

// const planned =

//     Number(
//         plannedInput.value
//     );


// const produced =

//     Number(
//         producedInput.value
//     );


// if (
//     planned <= 0
// ) {

//     progressBar.style.width =
//         "0%";


//     progressValue.textContent =
//         "0%";


//     halfMessage.textContent =

//         "Informe as quantidades.";

//     return;

// }


// let percentage =

//     (
//         produced
//         /
//         planned
//     )

//     *
//     100;


// if (
//     percentage > 100
// ) {

//     percentage = 100;

// }


// progressBar.style.width =

//     `${percentage}%`;


// progressValue.textContent =

//     `${percentage.toFixed(1)}%`;


// if (
//     percentage >= 50
// ) {

//     halfMessage.textContent =

//         "✓ A metade do lote já foi atingida.";

// }


// else {

//     halfMessage.textContent =

//         "O lote ainda não atingiu a metade.";

// }

// }

// plannedInput.addEventListener(

// "input",

// updateProgress

// );

// producedInput.addEventListener(

// "input",

// updateProgress

// );

// /* =========================
// MATERIAIS
// ========================= */

// const materialsContainer =

// document.querySelector(
//     "#materials-container"
// );

// const addMaterialButton =

// document.querySelector(
//     "#add-material"
// );

// let materialNumber = 0;

// /* =========================
// ADICIONAR MATERIAL
// ========================= */

// function addMaterial() {

// materialNumber++;


// const materialCard =

//     document.createElement(
//         "div"
//     );


// materialCard.classList.add(
//     "material-card"
// );


// materialCard.innerHTML = `

//     <div class="material-header">

//         <h3>

//             Material
//             ${materialNumber}

//         </h3>


//         <button
//             type="button"
//             class="remove-button"
//         >

//             Remover

//         </button>

//     </div>


//     <div class="input-group">

//         <label>

//             Nome do material

//         </label>


//         <input

//             type="text"

//             class="material-name"

//             placeholder="
//                 Ex.: Rótulo
//             "

//         >

//     </div>


//     <div class="lots-container">


//        <div class="lot-row">

//     <input
//         type="text"
//         class="lot-number"
//         placeholder="Número do lote"
//     >

//     <input
//         type="number"
//         class="lot-quantity"
//         min="0"
//         placeholder="Quantidade"
//     >

//     <label class="used-option">

//         <input
//             type="checkbox"
//             class="lot-used"
//         >

//         Já utilizado

//     </label>

//     <button
//         type="button"
//         class="remove-lot-button"
//     >
//         ✕
//     </button>

// </div>


//     </div>


//     <button

//         type="button"

//         class="add-lot-button"

//     >

//         + Adicionar lote

//     </button>

// `;


// materialsContainer.appendChild(
//     materialCard
// );


// const addLotButton =

//     materialCard.querySelector(
//         ".add-lot-button"
//     );


// addLotButton.addEventListener(

//     "click",

//     function() {

//         addLot(
//             materialCard
//         );

//     }

// );


// const removeMaterialButton =

//     materialCard.querySelector(
//         ".remove-button"
//     );


// removeMaterialButton.addEventListener(

//     "click",

//     function() {

//         materialCard.remove();

//     }

// );


// const firstRemoveLotButton =

//     materialCard.querySelector(
//         ".remove-lot-button"
//     );


// firstRemoveLotButton.addEventListener(

//     "click",

//     function() {

//         removeLot(
//             this
//         );

//     }

// );

// }

// /* =========================
// ADICIONAR LOTE
// ========================= */

// function addLot(
// materialCard
// ) {

// const lotsContainer =

//     materialCard.querySelector(
//         ".lots-container"
//     );


// const lotRow =

//     document.createElement(
//         "div"
//     );


// lotRow.classList.add(
//     "lot-row"
// );


// lotRow.innerHTML = `

//     <input
//         type="text"
//         class="lot-number"
//         placeholder="Número do lote"
//     >

//     <input
//         type="number"
//         class="lot-quantity"
//         min="0"
//         placeholder="Quantidade"
//     >

//     <label class="used-option">

//         <input
//             type="checkbox"
//             class="lot-used"
//         >

//         Já utilizado

//     </label>

//     <button
//         type="button"
//         class="remove-lot-button"
//     >
//         ✕
//     </button>

// `;


// lotsContainer.appendChild(
//     lotRow
// );


// const removeButton =

//     lotRow.querySelector(
//         ".remove-lot-button"
//     );


// removeButton.addEventListener(

//     "click",

//     function() {

//         removeLot(
//             this
//         );

//     }

// );

// }

// /* =========================
// REMOVER LOTE
// ========================= */

// function removeLot(
// button
// ) {

// const lotRow =

//     button.closest(
//         ".lot-row"
//     );


// const lotsContainer =

//     button.closest(
//         ".lots-container"
//     );


// const allLots =

//     lotsContainer.querySelectorAll(
//         ".lot-row"
//     );


// if (
//     allLots.length === 1
// ) {

//     alert(

//         "O material precisa ter pelo menos um lote."

//     );

//     return;

// }


// lotRow.remove();

// }

// /* =========================
// EVENTO DO MATERIAL
// ========================= */

// addMaterialButton.addEventListener(

// "click",

// addMaterial

// );

// /* =========================
// CHECKBOXES
// ========================= */

// function getCheckedValues(
// name
// ) {

// const checkedInputs =

//     document.querySelectorAll(

//         `input[name="${name}"]:checked`

//     );


// const values = [];


// checkedInputs.forEach(

//     function(input) {

//         values.push(
//             input.value
//         );

//     }

// );


// return values;

// }

// /* =========================
// PEGAR MATERIAIS
// ========================= */

// function getMaterials() {

// const materialCards =

//     document.querySelectorAll(
//         ".material-card"
//     );


// const materials = [];


// materialCards.forEach(

//     function(card) {


//         const name =

//             card.querySelector(
//                 ".material-name"
//             ).value.trim();


//         const lotRows =

//             card.querySelectorAll(
//                 ".lot-row"
//             );


//         const lots = [];


//         lotRows.forEach(

//             function(row) {


//                 const number =

//                     row.querySelector(
//                         ".lot-number"
//                     ).value.trim();


//                 const quantity =

//                     Number(

//                         row.querySelector(
//                             ".lot-quantity"
//                         ).value

//                     );


//                 if (
//                     number !== ""
//                 ) {

//                     const used =

//     row.querySelector(
//         ".lot-used"
//     ).checked;


// lots.push({

//     number:
//         number,

//     quantity:
//         quantity,

//     used:
//         used

// });

//                 }

//             }

//         );


//         if (
//             name !== ""
//         ) {

//             materials.push({

//                 name:
//                     name,

//                 lots:
//                     lots

//             });

//         }

//     }

// );


// return materials;

// }

// /* =========================
// LOCALSTORAGE
// ========================= */

// let records =

// JSON.parse(

//     localStorage.getItem(
//         "shiftflow-records"
//     )

// )

// ||

// [];

// /* =========================
// SALVAR REGISTRO
// ========================= */

// const saveButton =

// document.querySelector(
//     "#save-button"
// );

// saveButton.addEventListener(

// "click",

// saveRecord

// );

// function saveRecord() {

// const machine =

//     document.querySelector(
//         "#machine"
//     ).value.trim();


// const batch =

//     document.querySelector(
//         "#batch"
//     ).value.trim();


// const product =

//     document.querySelector(
//         "#product"
//     ).value.trim();


// const shift =

//     document.querySelector(
//         "#shift"
//     ).value;


// const planned =

//     Number(
//         plannedInput.value
//     );


// const produced =

//     Number(
//         producedInput.value
//     );


// if (

//     machine === ""

//     ||

//     batch === ""

//     ||

//     product === ""

//     ||

//     shift === ""

// ) {

//     alert(

//         "Preencha os dados principais da produção."

//     );

//     return;

// }


// const cleaning =

//     document.querySelector(

//         'input[name="cleaning"]:checked'

//     );


// const record = {

//     id:
//         Date.now(),


//     machine:
//         machine,


//     batch:
//         batch,


//     product:
//         product,


//     shift:
//         shift,


//     planned:
//         planned,


//     produced:
//         produced,


//     percentage:

//         planned > 0

//         ?

//         (
//             produced
//             /
//             planned
//         )

//         *
//         100

//         :

//         0,


//     occurrences:

//         getCheckedValues(
//             "occurrence"
//         ),


//     occurrenceDescription:

//         document.querySelector(

//             "#occurrence-description"

//         ).value.trim(),


//     actions:

//         getCheckedValues(
//             "action"
//         ),


//     anomalyStatus:

//         document.querySelector(

//             "#anomaly-status"

//         ).value,


//     actionDescription:

//         document.querySelector(

//             "#action-description"

//         ).value.trim(),


//     materials:

//         getMaterials(),


//     cleaning:

//         cleaning

//         ?

//         cleaning.value

//         :

//         "Não informado",


//     campaignEnd:

//         document.querySelector(

//             "#campaign-end"

//         ).value,


//     cleaningNotes:

//         document.querySelector(

//             "#cleaning-notes"

//         ).value.trim(),


//     createdAt:

//         new Date()

//         .toLocaleString(
//             "pt-BR"
//         )

// };


// records.push(
//     record
// );


// localStorage.setItem(

//     "shiftflow-records",

//     JSON.stringify(
//         records
//     )

// );


// renderHistory();


// alert(

//     "Passagem de turno salva com sucesso!"

// );

// }

// /* =========================
// MOSTRAR HISTÓRICO
// ========================= */

// const historyContainer =

// document.querySelector(
//     "#history-container"
// );

// function renderHistory() {

// historyContainer.innerHTML = "";


// if (
//     records.length === 0
// ) {

//     historyContainer.innerHTML = `

//         <p class="empty-history">

//             Nenhum registro salvo.

//         </p>

//     `;

//     return;

// }


// const reversedRecords =

//     [...records].reverse();


// reversedRecords.forEach(

//     function(record) {


//         const percentage =

//             Math.min(

//                 record.percentage,

//                 100

//             ).toFixed(1);


//         const occurrenceText =

//             record.occurrences.length > 0

//             ?

//             record.occurrences.join(
//                 ", "
//             )

//             :

//             "Nenhuma ocorrência selecionada";


//         const actionText =

//             record.actions.length > 0

//             ?

//             record.actions.join(
//                 ", "
//             )

//             :

//             "Nenhuma ação selecionada";


//         let materialsText = "";


//         record.materials.forEach(

//             function(material) {


//                 const lotsText =

//                     material.lots

//                     .map(

//                         function(lot) {

//                             return `

//                                 ${lot.number}

//                                 —

//                                 ${lot.quantity}

//                             `;

//                         }

//                     )

//                     .join(
//                         ", "
//                     );


//                 materialsText += `

//                     <p>

//                         <strong>

//                             ${material.name}:

//                         </strong>

//                         ${lotsText}

//                     </p>

//                 `;

//             }

//         );


//         historyContainer.innerHTML += `

//             <article
//                 class="history-card"
//             >


//                 <h3>

//                     🏭

//                     ${record.machine}

//                 </h3>


//                 <p>

//                     <strong>

//                         Produto:

//                     </strong>

//                     ${record.product}

//                 </p>


//                 <p>

//                     <strong>

//                         Lote:

//                     </strong>

//                     ${record.batch}

//                 </p>


//                 <p>

//                     <strong>

//                         Turno:

//                     </strong>

//                     ${record.shift}

//                 </p>


//                 <p>

//                     <strong>

//                         Produção:

//                     </strong>

//                     ${record.produced}

//                     de

//                     ${record.planned}

//                     unidades

//                     —

//                     ${percentage}%

//                 </p>


//                 <p>

//                     <strong>

//                         Ocorrências:

//                     </strong>

//                     ${occurrenceText}

//                 </p>


//                 <p>

//                     <strong>

//                         Ações:

//                     </strong>

//                     ${actionText}

//                 </p>


//                 <p>

//                     <strong>

//                         Status:

//                     </strong>

//                     ${record.anomalyStatus}

//                 </p>


//                 <p>

//                     <strong>

//                         Próxima limpeza:

//                     </strong>

//                     ${record.cleaning}

//                 </p>


//                 <p>

//                     <strong>

//                         Registro:

//                     </strong>

//                     ${record.createdAt}

//                 </p>


//                 ${materialsText}


//             </article>

//         `;

//     }

// );

// }

// /* =========================
// INICIAR A PÁGINA
// ========================= */

// renderHistory();





/* =========================
ELEMENTOS DA PRODUÇÃO
========================= */

const plannedInput =

document.querySelector(
    "#planned"
);

const producedInput =

document.querySelector(
    "#produced"
);

const progressBar =

document.querySelector(
    "#progress-bar"
);

const progressValue =

document.querySelector(
    "#progress-value"
);

const halfMessage =

document.querySelector(
    "#half-message"
);

/* =========================
CÁLCULO DO PROGRESSO
========================= */

function updateProgress() {

const planned =

    Number(
        plannedInput.value
    );


const produced =

    Number(
        producedInput.value
    );


if (
    planned <= 0
) {

    progressBar.style.width =
        "0%";


    progressValue.textContent =
        "0%";


    halfMessage.textContent =

        "Informe as quantidades.";

    return;

}


let percentage =

    (
        produced
        /
        planned
    )

    *
    100;


if (
    percentage > 100
) {

    percentage = 100;

}


progressBar.style.width =

    `${percentage}%`;


progressValue.textContent =

    `${percentage.toFixed(1)}%`;


if (
    percentage >= 50
) {

    halfMessage.textContent =

        "✓ A metade do lote já foi atingida.";

}


else {

    halfMessage.textContent =

        "O lote ainda não atingiu a metade.";

}

}

plannedInput.addEventListener(

"input",

updateProgress

);

producedInput.addEventListener(

"input",

updateProgress

);

/* =========================
MATERIAIS
========================= */

const materialsContainer =

document.querySelector(
    "#materials-container"
);

const addMaterialButton =

document.querySelector(
    "#add-material"
);

let materialNumber = 0;

/* =========================
ADICIONAR MATERIAL
========================= */

function addMaterial() {

materialNumber++;


const materialCard =

    document.createElement(
        "div"
    );


materialCard.classList.add(
    "material-card"
);


materialCard.innerHTML = `

    <div class="material-header">

        <h3>

            Material
            ${materialNumber}

        </h3>


        <button
            type="button"
            class="remove-button"
        >

            Remover

        </button>

    </div>


    <div class="input-group">

        <label>

            Nome do material

        </label>


        <input

            type="text"

            class="material-name"

            placeholder="
                Ex.: Rótulo
            "

        >

    </div>


    <div class="lots-container">


       <div class="lot-row">

    <input
        type="text"
        class="lot-number"
        placeholder="Número do lote"
    >

    <input
        type="number"
        class="lot-quantity"
        min="0"
        placeholder="Quantidade"
    >

    <label class="used-option">

        <input
            type="checkbox"
            class="lot-used"
        >

        Já utilizado

    </label>

    <button
        type="button"
        class="remove-lot-button"
    >
        ✕
    </button>

</div>


    </div>


    <button

        type="button"

        class="add-lot-button"

    >

        + Adicionar lote

    </button>

`;


materialsContainer.appendChild(
    materialCard
);


const addLotButton =

    materialCard.querySelector(
        ".add-lot-button"
    );


addLotButton.addEventListener(

    "click",

    function() {

        addLot(
            materialCard
        );

    }

);


const removeMaterialButton =

    materialCard.querySelector(
        ".remove-button"
    );


removeMaterialButton.addEventListener(

    "click",

    function() {

        materialCard.remove();

    }

);


const firstRemoveLotButton =

    materialCard.querySelector(
        ".remove-lot-button"
    );


firstRemoveLotButton.addEventListener(

    "click",

    function() {

        removeLot(
            this
        );

    }

);

}

/* =========================
ADICIONAR LOTE
========================= */

function addLot(
materialCard
) {

const lotsContainer =

    materialCard.querySelector(
        ".lots-container"
    );


const lotRow =

    document.createElement(
        "div"
    );


lotRow.classList.add(
    "lot-row"
);


lotRow.innerHTML = `

    <input
        type="text"
        class="lot-number"
        placeholder="Número do lote"
    >

    <input
        type="number"
        class="lot-quantity"
        min="0"
        placeholder="Quantidade"
    >

    <label class="used-option">

        <input
            type="checkbox"
            class="lot-used"
        >

        Já utilizado

    </label>

    <button
        type="button"
        class="remove-lot-button"
    >
        ✕
    </button>

`;


lotsContainer.appendChild(
    lotRow
);


const removeButton =

    lotRow.querySelector(
        ".remove-lot-button"
    );


removeButton.addEventListener(

    "click",

    function() {

        removeLot(
            this
        );

    }

);

}

/* =========================
REMOVER LOTE
========================= */

function removeLot(
button
) {

const lotRow =

    button.closest(
        ".lot-row"
    );


const lotsContainer =

    button.closest(
        ".lots-container"
    );


const allLots =

    lotsContainer.querySelectorAll(
        ".lot-row"
    );


if (
    allLots.length === 1
) {

    alert(

        "O material precisa ter pelo menos um lote."

    );

    return;

}


lotRow.remove();

}

/* =========================
EVENTO DO MATERIAL
========================= */

addMaterialButton.addEventListener(

"click",

addMaterial

);

/* =========================
CHECKBOXES
========================= */

function getCheckedValues(
name
) {

const checkedInputs =

    document.querySelectorAll(

        `input[name="${name}"]:checked`

    );


const values = [];


checkedInputs.forEach(

    function(input) {

        values.push(
            input.value
        );

    }

);


return values;

}

/* =========================
PEGAR MATERIAIS
========================= */

function getMaterials() {

const materialCards =

    document.querySelectorAll(
        ".material-card"
    );


const materials = [];


materialCards.forEach(

    function(card) {


        const name =

            card.querySelector(
                ".material-name"
            ).value.trim();


        const lotRows =

            card.querySelectorAll(
                ".lot-row"
            );


        const lots = [];


        lotRows.forEach(

            function(row) {


                const number =

                    row.querySelector(
                        ".lot-number"
                    ).value.trim();


                const quantity =

                    Number(

                        row.querySelector(
                            ".lot-quantity"
                        ).value

                    );


                if (
                    number !== ""
                ) {

                    const used =

    row.querySelector(
        ".lot-used"
    ).checked;


lots.push({

    number:
        number,

    quantity:
        quantity,

    used:
        used

});

                }

            }

        );


        if (
            name !== ""
        ) {

            materials.push({

                name:
                    name,

                lots:
                    lots

            });

        }

    }

);


return materials;

}

/* =========================
SUPABASE - REGISTROS
========================= */

const SUPABASE_URL = "https://dvocbwecshpvcilejfvt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2b2Nid2Vjc2hwdmNpbGVqZnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MDM3MTEsImV4cCI6MjEwMzE3OTcxMX0.kjpQorhGHsOmdg6T8CTl9cudNZ8e-LQj28DcjxrjRYM";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


let records = [];

async function loadRecords() {

    const { data, error } =

        await supabaseClient

            .from("shiftflow_records")

            .select("*")

            .order(
                "created_at",
                { ascending: true }
            );


    if (error) {

        console.error(
            "Erro ao carregar registros:",
            error
        );

        alert(
            "Não foi possível carregar o histórico. Verifique a configuração do Supabase."
        );

        return;

    }


    records = data;

    renderHistory();

}

/* =========================
SALVAR REGISTRO
========================= */

const saveButton =

document.querySelector(
    "#save-button"
);

saveButton.addEventListener(

"click",

saveRecord

);

async function saveRecord() {

const machine =

    document.querySelector(
        "#machine"
    ).value.trim();


const batch =

    document.querySelector(
        "#batch"
    ).value.trim();


const product =

    document.querySelector(
        "#product"
    ).value.trim();


const shift =

    document.querySelector(
        "#shift"
    ).value;


const planned =

    Number(
        plannedInput.value
    );


const produced =

    Number(
        producedInput.value
    );


if (

    machine === ""

    ||

    batch === ""

    ||

    product === ""

    ||

    shift === ""

) {

    alert(

        "Preencha os dados principais da produção."

    );

    return;

}


const cleaning =

    document.querySelector(

        'input[name="cleaning"]:checked'

    );


const record = {

    machine:
        machine,


    batch:
        batch,


    product:
        product,


    shift:
        shift,


    planned:
        planned,


    produced:
        produced,


    percentage:

        planned > 0

        ?

        (
            produced
            /
            planned
        )

        *
        100

        :

        0,


    occurrences:

        getCheckedValues(
            "occurrence"
        ),


    occurrence_description:

        document.querySelector(

            "#occurrence-description"

        ).value.trim(),


    actions:

        getCheckedValues(
            "action"
        ),


    anomaly_status:

        document.querySelector(

            "#anomaly-status"

        ).value,


    action_description:

        document.querySelector(

            "#action-description"

        ).value.trim(),


    materials:

        getMaterials(),


    cleaning:

        cleaning

        ?

        cleaning.value

        :

        "Não informado",


    campaign_end:

        document.querySelector(

            "#campaign-end"

        ).value

        ||

        null,


    cleaning_notes:

        document.querySelector(

            "#cleaning-notes"

        ).value.trim()

};


const { error } =

    await supabaseClient

        .from("shiftflow_records")

        .insert(record);


if (error) {

    console.error(
        "Erro ao salvar registro:",
        error
    );

    alert(
        "Não foi possível salvar. Verifique a configuração do Supabase."
    );

    return;

}


await loadRecords();


alert(

    "Passagem de turno salva com sucesso!"

);

}

/* =========================
MOSTRAR HISTÓRICO
========================= */

const historyContainer =

document.querySelector(
    "#history-container"
);

function renderHistory() {

historyContainer.innerHTML = "";


if (
    records.length === 0
) {

    historyContainer.innerHTML = `

        <p class="empty-history">

            Nenhum registro salvo.

        </p>

    `;

    return;

}


const reversedRecords =

    [...records].reverse();


reversedRecords.forEach(

    function(record) {


        const percentage =

            Math.min(

                record.percentage,

                100

            ).toFixed(1);


        const occurrenceText =

            record.occurrences.length > 0

            ?

            record.occurrences.join(
                ", "
            )

            :

            "Nenhuma ocorrência selecionada";


        const actionText =

            record.actions.length > 0

            ?

            record.actions.join(
                ", "
            )

            :

            "Nenhuma ação selecionada";


        let materialsText = "";


        record.materials.forEach(

            function(material) {


                const lotsText =

                    material.lots

                    .map(

                        function(lot) {

                            return `

                                ${lot.number}

                                —

                                ${lot.quantity}

                            `;

                        }

                    )

                    .join(
                        ", "
                    );


                materialsText += `

                    <p>

                        <strong>

                            ${material.name}:

                        </strong>

                        ${lotsText}

                    </p>

                `;

            }

        );


        historyContainer.innerHTML += `

            <article
                class="history-card"
            >


                <h3>

                    🏭

                    ${record.machine}

                </h3>


                <p>

                    <strong>

                        Produto:

                    </strong>

                    ${record.product}

                </p>


                <p>

                    <strong>

                        Lote:

                    </strong>

                    ${record.batch}

                </p>


                <p>

                    <strong>

                        Turno:

                    </strong>

                    ${record.shift}

                </p>


                <p>

                    <strong>

                        Produção:

                    </strong>

                    ${record.produced}

                    de

                    ${record.planned}

                    unidades

                    —

                    ${percentage}%

                </p>


                <p>

                    <strong>

                        Ocorrências:

                    </strong>

                    ${occurrenceText}

                </p>


                <p>

                    <strong>

                        Ações:

                    </strong>

                    ${actionText}

                </p>


                <p>

                    <strong>

                        Status:

                    </strong>

                    ${record.anomaly_status}

                </p>


                <p>

                    <strong>

                        Próxima limpeza:

                    </strong>

                    ${record.cleaning}

                </p>


                <p>

                    <strong>

                        Registro:

                    </strong>

                    ${
                        new Date(
                            record.created_at
                        ).toLocaleString(
                            "pt-BR"
                        )
                    }

                </p>


                ${materialsText}


            </article>

        `;

    }

);

}

/* =========================
INICIAR A PÁGINA
========================= */

loadRecords();