$('form').on('submit', function(e){
e.preventDefault();
let title = $("input").eq(0).val();
let rating = $("input").eq(1).val();
let section = $("<section></section>")
let newHTML = $(`<p> ${title} ${rating} </p>`)
const deleteBtn = $("<button id='delete'>Delete!</button>").on('click', function(evt){
    $(evt.target).closest(section).remove();
});;
$(newHTML).append(deleteBtn);
$(section).append(newHTML);
$('body').append(section);
$('form')[0].reset();
});