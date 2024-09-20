document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('cash-in-from').classList.add('hidden');
})
document.getElementById('cash-in').addEventListener('click', function(){
    document.getElementById('cash-in-from').classList.remove('hidden')
    document.getElementById('cash-out-from').classList.add('hidden');
})