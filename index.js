const checkbox = document.querySelector('#checkbox')
const DarkTextWhite = document.querySelectorAll('.darkTextWhite')
const followers = document.querySelectorAll('.followers')
const infos = document.querySelectorAll('.info')
const hr = document.querySelector('hr')
checkbox.addEventListener('change', e => {
    if(checkbox.checked){
        document.body.className = 'darkBody'
        DarkTextWhite.forEach(WhiteText => WhiteText.style.color = 'hsl(0, 0%, 100%)')
        followers.forEach(follower => follower.style.backgroundColor = 'hsl(228, 28%, 20%)')
        infos.forEach(info => info.style.backgroundColor = 'hsl(228, 28%, 20%)')
        hr.style.border = '1px solid hsl(228, 12%, 44%)'
    }else{
        document.body.className = ''
        DarkTextWhite.forEach(WhiteText => WhiteText.style.color = 'black')
        followers.forEach(follower => follower.style.backgroundColor = 'hsl(227, 47%, 96%)')
        infos.forEach(info => info.style.backgroundColor = 'hsl(227, 47%, 96%)')
    }
})