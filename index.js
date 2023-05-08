// Average down the stock 
function calculate() {
    // get all the into from user input
    var share1 = parseFloat($('#share1').val());
    var cost1 = parseFloat($('#cost1').val());
    var share2 = parseFloat($('#share2').val());
    var cost2 = parseFloat($('#cost2').val());

    // display for user the new shares & cost
    var disp_shares = $("#total_share");
    var disp_amount = $("#total_amount");
    var disp_avg = $("#avg_cost");

    // sum the total amount for the purchases
    var amount1 = share1 * cost1;
    var amount2 = share2 * cost2;
    var total_amount = amount1 + amount2;

    // calculate the total shares & average down
    var total_share = share1 + share2;
    var new_costs = total_amount / total_share;
    var new_cost = new_costs.toFixed(2);
    if (document.getElementById("share1").value == "") {
        return;
    }
    else {
        if (disp_shares.value != "" && disp_avg.value != "") {
            disp_shares.empty();
            disp_avg.empty();
            disp_shares.text(total_share);
            disp_amount.text("$" + total_amount);
            disp_avg.text("$" + new_cost);
        }
        if (disp_shares.value == "" && disp_avg.value != "") {
            disp_shares.text(total_share);
            disp_amount.text("$" + total_amount);
            disp_avg.text("$" + new_cost);
        }
    }
};

// remove all the values
function removeAll() {
    document.getElementById("share1").value = "";
    document.getElementById("cost1").value = "";
    document.getElementById("share2").value = "";
    document.getElementById("cost2").value = "";
    $("#total_share").empty();
    $("#total_amount").empty();
    $("#avg_cost").empty(); 
};


function calc() {
    var amount = parseFloat($('#amount').val());
    var price = parseFloat($('#price').val());
    var shares = document.getElementById("shares");

    var total_shares = amount / price;
    var total_sh = total_shares.toFixed(2);

    if (document.getElementById("amount").value == "" ) {
        return;
    }
    else {
        shares.innerHTML = total_sh;
    }
};


function rmvAll() {
    document.getElementById("amount").value = "";
    document.getElementById("price").value = "";
    $("#shares").empty();
};


// show/hide each calculator
function mainVisible() {
    document.getElementById('container1').style.display = "block";
    document.getElementById('container2').style.display = "none";
}
function calcVisible() {
    document.getElementById('container1').style.display = "none";
    document.getElementById('container2').style.display = "block";
}