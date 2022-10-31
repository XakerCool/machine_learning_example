window.addEventListener("load", () => {
    let container = document.getElementById("container");
    let prCont = [];
    content.forEach((elem, index) => {
        if(elem.color == localStorage?.getItem("priorityColor")) {
            prCont.push(elem);
        }
    });
    console.log(prCont);
    if(prCont.length > 0) {
        for(var i = 0; i < (prCont.length / 2 ) + 1; i++) {
            let card = $("img", {src: prCont[i].src, classList: "card img", color: prCont[i].color});
            card.addEventListener("click", (e) => {
                console.log(e.target.color);
                localStorage.setItem("priorityColor", e.target.color);
                alert("We have remembered your preference in color");

            });
            container.append(card);
            content.splice(content.indexOf(prCont[i]), 1);
        }
    }

    for (var j = 0; j < content.length; j++) {
        let card = $("img", {src: content[j].src, classList: "card img", color: content[j].color});
        card.addEventListener("click", (e) => {
            localStorage.setItem("priorityColor", e.target.color);
            alert("We have remembered your preference in color"); 
        });
        container.append(card);
    }
})

var content = [
    {
        id: 1,
        name: "Красная тарелка",
        color: "red",
        category: "dish",
        src: "https://img.freepik.com/premium-photo/red-plate-isolated-on-white-background_269353-68.jpg"
    },
    {
        id: 2,
        name: "Синяя тарелка",
        color: "blue",
        category: "dish",
        src: "https://images.satu.kz/130894813_w600_h600_130894813.jpg"
    },
    {
        id: 3,
        name: "Зелёная тарелка",
        color: "green",
        category: "dish",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnaKqHeuaDOcG5AEUIkxxicnFygJWVDNPg-hai0M&s"
    },
    {
        id: 4,
        name: "Красная тарелка",
        color: "red",
        category: "dish",
        src: "https://img.freepik.com/premium-photo/red-plate-isolated-on-white-background_269353-68.jpg"
    },
    {
        id: 5,
        name: "Синяя тарелка",
        color: "blue",
        category: "dish",
        src: "https://images.satu.kz/130894813_w600_h600_130894813.jpg"
    },
    {
        id: 6,
        name: "Зелёная тарелка",
        color: "green",
        category: "dish",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnaKqHeuaDOcG5AEUIkxxicnFygJWVDNPg-hai0M&s"
    },
    {
        id: 7,
        name: "Красная тарелка",
        color: "red",
        category: "dish",
        src: "https://img.freepik.com/premium-photo/red-plate-isolated-on-white-background_269353-68.jpg"
    },
    {
        id: 8,
        name: "Синяя тарелка",
        color: "blue",
        category: "dish",
        src: "https://images.satu.kz/130894813_w600_h600_130894813.jpg"
    },
    {
        id: 9,
        name: "Зелёная тарелка",
        color: "green",
        category: "dish",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnaKqHeuaDOcG5AEUIkxxicnFygJWVDNPg-hai0M&s"
    },
    {
        id: 10,
        name: "Красная кружка",
        color: "red",
        category: "cup",
        src: "https://st.depositphotos.com/1000198/4222/i/600/depositphotos_42225673-stock-photo-red-mug.jpg"
    },
    {
        id: 11,
        name: "Синяя кружка",
        color: "blue",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21628/6b6ed578cd62a8fe1576d8ae23c7dc2ce6d38bd9.jpg"
    },
    {
        id: 12,
        name: "Зелёная кружка",
        color: "green",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21932/7397fc493cc72190cce6554a23e830dcada2ef09.jpg"
    },
    {
        id: 13,
        name: "Красная ложка",
        color: "red",
        category: "spoon",
        src: "https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-6095994.jpg"
    },
    {
        id: 14,
        name: "Синяя ложка",
        color: "blue",
        category: "spoon",
        src: "https://yans.kz/upload/iblock/e87/wm_e872e97e01d76fd9f228c3474ee84a6c.jpeg"
    },
    {
        id: 15,
        name: "Зелёная ложка",
        color: "green",
        category: "spoon",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKyY1-gklQ4DVElaEy1PjS15qEGUvDzW4GZUYryzc_w&s"
    },
    {
        id: 16,
        name: "Красная кружка",
        color: "red",
        category: "cup",
        src: "https://st.depositphotos.com/1000198/4222/i/600/depositphotos_42225673-stock-photo-red-mug.jpg"
    },
    {
        id: 17,
        name: "Синяя кружка",
        color: "blue",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21628/6b6ed578cd62a8fe1576d8ae23c7dc2ce6d38bd9.jpg"
    },
    {
        id: 18,
        name: "Зелёная кружка",
        color: "green",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21932/7397fc493cc72190cce6554a23e830dcada2ef09.jpg"
    },
    {
        id: 19,
        name: "Красная ложка",
        color: "red",
        category: "spoon",
        src: "https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-6095994.jpg"
    },
    {
        id: 20,
        name: "Синяя ложка",
        color: "blue",
        category: "spoon",
        src: "https://yans.kz/upload/iblock/e87/wm_e872e97e01d76fd9f228c3474ee84a6c.jpeg"
    },
    {
        id: 21,
        name: "Зелёная ложка",
        color: "green",
        category: "spoon",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKyY1-gklQ4DVElaEy1PjS15qEGUvDzW4GZUYryzc_w&s"
    },
    {
        id: 22,
        name: "Красная кружка",
        color: "red",
        category: "cup",
        src: "https://st.depositphotos.com/1000198/4222/i/600/depositphotos_42225673-stock-photo-red-mug.jpg"
    },
    {
        id: 23,
        name: "Синяя кружка",
        color: "blue",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21628/6b6ed578cd62a8fe1576d8ae23c7dc2ce6d38bd9.jpg"
    },
    {
        id: 24,
        name: "Зелёная кружка",
        color: "green",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21932/7397fc493cc72190cce6554a23e830dcada2ef09.jpg"
    },
    {
        id: 25,
        name: "Красная ложка",
        color: "red",
        category: "spoon",
        src: "https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-6095994.jpg"
    },
    {
        id: 26,
        name: "Синяя ложка",
        color: "blue",
        category: "spoon",
        src: "https://yans.kz/upload/iblock/e87/wm_e872e97e01d76fd9f228c3474ee84a6c.jpeg"
    },
    {
        id: 27,
        name: "Зелёная ложка",
        color: "green",
        category: "spoon",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKyY1-gklQ4DVElaEy1PjS15qEGUvDzW4GZUYryzc_w&s"
    },
]
