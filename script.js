// Clicking on the 💗 heart icon of any card will increase the count in the Navbar
function getHeartIconClickCountNumber(id){
    const heartCountNumberElement = parseInt(document.getElementById(id).innerText)
    const heartCountNumber = heartCountNumberElement + 1
    document.getElementById(id).innerText = heartCountNumber
}

document.getElementById("heart-icon-1").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-2").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-3").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-4").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-5").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-6").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-7").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-8").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})
document.getElementById("heart-icon-9").addEventListener("click", function(){
    getHeartIconClickCountNumber("heart-count")
})



// Call Buttons
const callHistoryData = []

// function to get innertext 
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}

// function to set innertext 
function setInnerText(value){
    const coinNumber = document.getElementById("call-coin")
    coinNumber.innerText = value
}

document.getElementById("call-button-1").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling National Emergency Service 999...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "জাতীয় জরুরি সেবা",
        number: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-2").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Police 999...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "পুলিশ",
        number: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-3").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Fire Service 999...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "ফায়ার সার্ভিস",
        number: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-4").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Ambulance 1994-999999...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "অ্যাম্বুলেন্স",
        number: "1994-999999",
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-5").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Women & Child Helpline 109...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "নারী ও শিশু সহায়তা",
        number: 109,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-6").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Anti-Corruption 106...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "দুদক",
        number: 106,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-7").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Electricity Outage 16216...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "বিদ্যুৎ বিভ্রাট",
        number: 16216,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-8").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Brac 16445...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "ব্র্যাক",
        number: 16445,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})

document.getElementById("call-button-9").addEventListener("click", function(){
    const callCoinElement = getInnerText("call-coin")
    if (callCoinElement < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        return;
    }
    alert("📞 Calling Bangladesh Railway 163...")
    const TotalNewCallCoinNumber = callCoinElement - 20
    setInnerText(TotalNewCallCoinNumber)


    const data = {
        name: "বাংলাদেশ রেলওয়ে",
        number: 163,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""

    for(const callData of callHistoryData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex items-center justify-between rounded-lg bg-[#fafafa] py-4 px-1 mb-2">
                <div>
                    <h4 class="text-[#111111]">${callData.name}</h4>
                    <p class="text-[#5c5c5c]">${callData.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${callData.date}</p>
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div)
    }
})





//Call History 
document.getElementById("clear-button").addEventListener("click", function(){
    const callHistoryContainer = document.getElementById("call-histroy-container")
    callHistoryContainer.innerText = ""
})