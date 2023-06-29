document.addEventListener('alpine:init', ()=>{
alpine.data('greet', () =>({
user: '',
greetings: '',
greetMe(){
    this.greetings= greet(this.user)
}
}))

})