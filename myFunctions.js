$(document).ready(function() {
    // وظيفة لإظهار وإخفاء تفاصيل الكتاب
    $(".toggle-details").click(function() {
        const detailsRow = $(this).closest("tr").next(".details");
        detailsRow.toggleClass("hidden");
        $(this).text(detailsRow.hasClass("hidden") ? "إظهار التفاصيل" : "إخفاء التفاصيل");
    });

    // وظيفة لتفعيل زر الشراء
    $(".book-select").on("change", function() {
        let anySelected = $(".book-select:checked").length > 0;
        $("#buy-button").prop("disabled", !anySelected);
    });

    // الانتقال إلى صفحة فورم الشراء
    $("#buy-button").on("click", function() {
        window.location.href = "form.html";
    });
});