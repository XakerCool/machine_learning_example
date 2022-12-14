window.addEventListener("load", () => {
    let container = document.getElementById("container");
    let prCont = [];
    content.forEach((elem, index) => {
        if(elem.color == localStorage?.getItem("priorityColor") && elem.category == localStorage?.getItem("priorityCategory")) {
            prCont.push(elem);
        }
    });
    if(prCont.length > 0) {
        for(var i = 0; i < prCont.length; i++) {
            let card = $("div", {classList: "card", dataset: { color: prCont[i].color, category: prCont[i].category }, style: {
                backgroundImage: "url(" + prCont[i].src + ")"
            }}, 
                $("i", { classList: "fa-solid fa-thumbs-up like_button" , onclick: (e) => {
                    console.log(e.target.parentElement);
                    localStorage.setItem("priorityColor", e.target.parentElement.dataset.color);
                    localStorage.setItem("priorityCategory", e.target.parentElement.dataset.category);
                }})
            );
            container.append(card);
            content.splice(content.indexOf(prCont[i]), 1);
        }
    }
    let existedId = [];
    let counter = 0;
    do {
        let cardNum = randomInt(0, content.length);
        if (existedId.includes(cardNum) == false) {
            existedId.push(cardNum);
            let card = $("div", {classList: "card", dataset: { color: content[cardNum].color, category: content[cardNum].category }, style: {
                backgroundImage: "url(" + content[cardNum].src + ")"
            }},
                $("i", { classList: "fa-solid fa-thumbs-up like_button" , onclick: (e) => {
                    console.log(e.target.parentElement);
                    localStorage.setItem("priorityColor", e.target.parentElement.dataset.color);
                    localStorage.setItem("priorityCategory", e.target.parentElement.dataset.category);
                }})
            );
            container.append(card);
            counter++;
        }
    } while(counter != content.length);
})

var content = [
    {
        id: 1,
        name: "?????????????? ??????????????",
        color: "red",
        category: "dish",
        src: "https://img.freepik.com/premium-photo/red-plate-isolated-on-white-background_269353-68.jpg"
    },
    {
        id: 2,
        name: "?????????? ??????????????",
        color: "blue",
        category: "dish",
        src: "https://images.satu.kz/130894813_w600_h600_130894813.jpg"
    },
    {
        id: 3,
        name: "?????????????? ??????????????",
        color: "green",
        category: "dish",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnaKqHeuaDOcG5AEUIkxxicnFygJWVDNPg-hai0M&s"
    },
    {
        id: 4,
        name: "?????????????? ??????????????",
        color: "red",
        category: "dish",
        src: "https://img.freepik.com/premium-photo/red-plate-isolated-on-white-background_269353-68.jpg"
    },
    {
        id: 5,
        name: "?????????? ??????????????",
        color: "blue",
        category: "dish",
        src: "https://images.satu.kz/130894813_w600_h600_130894813.jpg"
    },
    {
        id: 6,
        name: "?????????????? ??????????????",
        color: "green",
        category: "dish",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnaKqHeuaDOcG5AEUIkxxicnFygJWVDNPg-hai0M&s"
    },
    {
        id: 7,
        name: "?????????????? ??????????????",
        color: "red",
        category: "dish",
        src: "https://img.freepik.com/premium-photo/red-plate-isolated-on-white-background_269353-68.jpg"
    },
    {
        id: 8,
        name: "?????????? ??????????????",
        color: "blue",
        category: "dish",
        src: "https://images.satu.kz/130894813_w600_h600_130894813.jpg"
    },
    {
        id: 9,
        name: "?????????????? ??????????????",
        color: "green",
        category: "dish",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnaKqHeuaDOcG5AEUIkxxicnFygJWVDNPg-hai0M&s"
    },
    {
        id: 10,
        name: "?????????????? ????????????",
        color: "red",
        category: "cup",
        src: "https://st.depositphotos.com/1000198/4222/i/600/depositphotos_42225673-stock-photo-red-mug.jpg"
    },
    {
        id: 11,
        name: "?????????? ????????????",
        color: "blue",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21628/6b6ed578cd62a8fe1576d8ae23c7dc2ce6d38bd9.jpg"
    },
    {
        id: 12,
        name: "?????????????? ????????????",
        color: "green",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21932/7397fc493cc72190cce6554a23e830dcada2ef09.jpg"
    },
    {
        id: 13,
        name: "?????????????? ??????????",
        color: "red",
        category: "spoon",
        src: "https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-6095994.jpg"
    },
    {
        id: 14,
        name: "?????????? ??????????",
        color: "blue",
        category: "spoon",
        src: "https://yans.kz/upload/iblock/e87/wm_e872e97e01d76fd9f228c3474ee84a6c.jpeg"
    },
    {
        id: 15,
        name: "?????????????? ??????????",
        color: "green",
        category: "spoon",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKyY1-gklQ4DVElaEy1PjS15qEGUvDzW4GZUYryzc_w&s"
    },
    {
        id: 16,
        name: "?????????????? ????????????",
        color: "red",
        category: "cup",
        src: "https://st.depositphotos.com/1000198/4222/i/600/depositphotos_42225673-stock-photo-red-mug.jpg"
    },
    {
        id: 17,
        name: "?????????? ????????????",
        color: "blue",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21628/6b6ed578cd62a8fe1576d8ae23c7dc2ce6d38bd9.jpg"
    },
    {
        id: 18,
        name: "?????????????? ????????????",
        color: "green",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21932/7397fc493cc72190cce6554a23e830dcada2ef09.jpg"
    },
    {
        id: 19,
        name: "?????????????? ??????????",
        color: "red",
        category: "spoon",
        src: "https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-6095994.jpg"
    },
    {
        id: 20,
        name: "?????????? ??????????",
        color: "blue",
        category: "spoon",
        src: "https://yans.kz/upload/iblock/e87/wm_e872e97e01d76fd9f228c3474ee84a6c.jpeg"
    },
    {
        id: 21,
        name: "?????????????? ??????????",
        color: "green",
        category: "spoon",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKyY1-gklQ4DVElaEy1PjS15qEGUvDzW4GZUYryzc_w&s"
    },
    {
        id: 22,
        name: "?????????????? ????????????",
        color: "red",
        category: "cup",
        src: "https://st.depositphotos.com/1000198/4222/i/600/depositphotos_42225673-stock-photo-red-mug.jpg"
    },
    {
        id: 23,
        name: "?????????? ????????????",
        color: "blue",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21628/6b6ed578cd62a8fe1576d8ae23c7dc2ce6d38bd9.jpg"
    },
    {
        id: 24,
        name: "?????????????? ????????????",
        color: "green",
        category: "cup",
        src: "https://allgifts.kz/assets/images/products/21932/7397fc493cc72190cce6554a23e830dcada2ef09.jpg"
    },
    {
        id: 25,
        name: "?????????????? ??????????",
        color: "red",
        category: "spoon",
        src: "https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-6095994.jpg"
    },
    {
        id: 26,
        name: "?????????? ??????????",
        color: "blue",
        category: "spoon",
        src: "https://yans.kz/upload/iblock/e87/wm_e872e97e01d76fd9f228c3474ee84a6c.jpeg"
    },
    {
        id: 27,
        name: "?????????????? ??????????",
        color: "green",
        category: "spoon",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKyY1-gklQ4DVElaEy1PjS15qEGUvDzW4GZUYryzc_w&s"
    },
]