let arr = [
    {
        name: "Allu Arjun",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLCgexM6tRpuoKvUR03jGPQq8nwcEufODlg&s",
    },
    {
        name: "kerala buty",
        image:
            "https://assets.cntraveller.in/photos/65f445fc8411ed4511e9a4c9/4:3/w_4992,h_3744,c_limit/GettyImages-110051777.jpg",
    },
    {
        name: "Shimla",
        image:
            "https://c8.alamy.com/comp/MXBK6E/not-brazil-nor-argentina-its-my-india-the-beautiful-landscape-of-shimla-situated-in-himachal-pradesh-MXBK6E.jpg",
    },
    {
        name: "Kedarnath",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2kP9BNijPZK0h9tweh9Q1y1cstfpJwfHHA&s",
    },
    {
        name: "Elephant Baby",
        image:
            "https://www.saveelephant.org/wp-content/uploads/2022/02/Wan_Mai_5.jpg",
    },
    {
        name: "Mumbai skyline",
        image:
            "https://t3.ftcdn.net/jpg/05/59/31/60/360_F_559316042_Mh04HdRpbZ8ImPwwGtGaRgPnb8b6T69I.jpg",
    },
    {
        name: "Japanese Temple",
        image:
            "https://assets.vogue.in/photos/6687b953289b94502f6c9f15/3:4/w_2560%2Cc_limit/1029818226",
    },
    {
        name: "Beautifull Train",
        image :
           "https://www.authenticindiatours.com/app/uploads/2022/05/10-Reasons-to-visit-Tamil-Nadu-1400x550-c-default.jpg",
        
    },
    {
        name : "Architecture",
        image : "https://www.tamilnadutourism.com/images/tour-packages/card/temple-tours.jpg"
    }
];

function showCards()
{
    let clutter = "";

    arr.forEach((items) => {
        clutter += `<div class="box">
                        <img src="${items.image}" alt="">
                        <div class="caption">${items.name}</div>
                    </div>`
    })

    document.querySelector(".container")
                        .innerHTML = clutter;

}



showCards();

