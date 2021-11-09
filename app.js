$('.submitButton').on('click', function() {
    if ($('.dname').val() === ''){
        $('.output').text('Display Name is required.');
    }
    else if ($('.commentBox').val === ''){
        $('.output').text('Comment is required.');
    }
    else {
        $('.inputBody').append(`
        <div class="comment">
                <div class="userImg"></div>
                <div class="userInfo">
                    <div class="topBar">
                        <div class="newUserName"><h3>${$('.dName').val()}</h3></div>
                        <div class="editDelete">
                            <div class="edit">Edit</div>
                            <div class="delete">Delete</div>
                        </div>
                    </div>
                    <div class="newComment"><h2>${$('.commentBox').val()}</h2></div>
                    <div class="newEditBox invisible">
                        <input type="text" class="editBox" placeholder="Enter New Comment Here.">
                        <div class="newSubmit">Submit</div>
                    </div>
                </div>
            </div>
        `)

    }
})

$('.inputBody').on('click', '.edit', function() {
    let parent = $(this).parent()[0];
    let nextParent = $(parent).parent()[0];
    let sibling = $(nextParent).next();
    let nextSibling = $(sibling).next();
    $(nextSibling).toggleClass('invisible');
})

$('.inputBody').on('click', '.delete', function() {
    let papa = $(this).parent()[0];
    let grandpa = $(papa).parent()[0];
    let grandpappy = $(grandpa).parent()[0];
    let pappy = $(grandpappy).parent()[0];
    let ancientOne = $(pappy).remove();
})

$('.inputBody').on('click', '.newSubmit', function() {
    let sibling = $(this).prev();
    let newText = $(sibling).val();

    let update = $(this).parent()[0];
    let olderChild = $(update).prev();
    let h2 = $(olderChild).children()[0];
    $(h2).text(`${newText}`)

    let parent = $(this).parent()[0];
    $(parent).toggleClass('invisible');
})