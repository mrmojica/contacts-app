/*******

-allow users to create an store contacts 
-once users adds contacts should see list of contacts underneath input
-user should be able to click contact to view their information on side of the form

-each contact should be stored as an object with a number of properties
-submitting a form should create a new object with whatever properties are submitted
	-user should not be able to submit a new contact w/o min info (name)

-EXTRA create edit contact option


******/

var counter = 0;
var contactList = [];


$(document).ready(function() {


    //function method *contructor* to be used to retain values for all objects that get created
    function ContactsInfo(firstName, lastName, phoneNumber, street, city, state) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.street = street;
        this.city = city;
        this.state = state;
    }

    // validation Function
    // function validateForm() {
    //     var validateName = document.forms["myContact"]["first-name", "last-name"].value;
    //     if ( validateName == null || validateName == "") {
    //         alert("First and last name must be filled out");
    //         return false;
    //     }
    // };


    // hide contact's detailed list
    $('.contacts-detail').hide();

    //adds users input to an array of objects
    $('#add-button').click(function(event) {
        event.preventDefault();

        //-----Name Validation-------------	
        var validateName = document.forms["myContact"]["first-name", "last-name"].value;
        if (validateName == null || validateName == "") {
            alert("First and last name must be filled out");
            return false;
        } else {

            /*using *new* creates an instance called Contacts Info (inherited object) of a user-defined object-type or
	 of one of the bult-in object types that has a constructor function*/
            contactList.push(new ContactsInfo(
                $('#firstName').val(),
                $('#lastName').val(),
                $('#phoneNumber').val(),
                $('#street').val(),
                $('#city').val(),
                $('#state').val()));
            //console.log(contactList);
            //display user added contact name in contact list
            $('.contacts-list').append("<li class='selected' id='" + counter + "'>" + $('#firstName').val() + " " + $('#lastName').val() + "</li>");
            $('input:text').val('');
            counter++

        }


    });

    //user selects contact from list and contact details displays
    $('.contacts-list').on('click', '.selected', function() {

        $('.contacts-detail').show();
        console.log(counter);
        console.log(contactList[event.target.id]);
        $('.firstName').text(contactList[event.target.id].firstName);
        $('.lastName').text(contactList[event.target.id].lastName);
        $('.phoneNumber').text(contactList[event.target.id].phoneNumber);
        $('.street').text(contactList[event.target.id].street);
        $('.city').text(contactList[event.target.id].city);
        $('.state').text(contactList[event.target.id].state);


    });








});