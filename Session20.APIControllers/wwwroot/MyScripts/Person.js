function AddPerson() {
    var myKeyVals = { CarModel: cm, Color: cc, ShasiNumber: shn, Pelak: pl, DriverName: dn, DriverLastName: df, CodeMelli: did, Govahiname: dl, personalCode: df, DeviceSerialNumber: deviceSerialNumber, LinkCompanyID: GetLinkCompanyID(0), CarIDs: $("#selectusers").val() };

    $.ajax({
        url: document.location.origin + "/api/CarD/CTI",
        type: "POST",
        data: myKeyVals,
        beforeSend: setHeader,
        success: function (data, textStatus, jqXHR) {
            console.log(data.toString());
            console.log(textStatus.toString());
            var txtsuccess = "خودرو با موفقیت ثبت شد.";
            document.getElementById("snackbar").innerHTML = txtsuccess;
            document.getElementById("car-model").value = "";
            document.getElementById("shasi-number").value = "";
            document.getElementById("car-color").value = "";
            document.getElementById("pelak0").value = "";
            document.getElementById("pelak01").value = "";
            document.getElementById("pelak02").value = "";
            document.getElementById("pelak03").value = "";
            document.getElementById("driver-name").value = "";
            document.getElementById("driver-id-code").value = "";
            document.getElementById("driver-family").value = "";
            document.getElementById("driving-lisence").value = "";
            ShowSnackbargreen();
            ShowCarsPage("1");
            ShowCompanies();
            $('#submitbtn').button('reset');
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 405) {
            }
            else if (jqXHR.responseJSON.Message != undefined) {

                document.getElementById("snackbar").innerHTML = jqXHR.responseJSON.Message.replace("\n", "<br/>");
                ShowSnackbarred();

            }
            console.log(textStatus.toString());
            console.log(errorThrown.toString());
            $('#submitbtn').button('reset');
        }
    });
}