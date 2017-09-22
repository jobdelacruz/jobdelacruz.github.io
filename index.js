$(function () {
    
        // on submitting the form
        $('form').submit(function (event) {
            // prevent the default action of reloading the page
            //event.preventDefault();
        });
    
    // RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
    /* include the following HTML to use:
    <div class="form-group">
        <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
        <div class="alert alert-danger alert-dismissible fade in" hidden id="alert-id">
            <button type="button" class="close" id="close-id"><span>&times;</span></button>
            Thank you! We'll get in touch.
        </div>
    </div>
    */
    
        // on clicking the X button
        $('#close-id').click(function(){
            // hide the alert panel by adding the hidden property
            $('#alert-id').prop('hidden', true);
        });
    
    });