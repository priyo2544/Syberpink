document.addEventListener("DOMContentLoaded", function () {
    const SignInBtn = document.getElementById("SignInBtn");

    SignInBtn.addEventListener("click", function(e) {
        e.preventDefault(); // ফর্ম সাবমিট বন্ধ

        const numberInput = document.getElementById("log-email").value.trim();
        const passwordInput = document.getElementById("log-pass").value.trim();

        // 🔐 শুধু নির্দিষ্ট নাম্বার ও পাসওয়ার্ডে প্রবেশযোগ্য
        const allowedNumber = "01612023490";
        const allowedPassword = "Authan490";

        if (numberInput === allowedNumber && passwordInput === allowedPassword) {
            alert("✅ সঠিক তথ্য! লগইন হচ্ছে...");
            // ✅ এখানে সরাসরি রিডাইরেক্ট করুন
            window.location.href = "index.html";
        } else {
            alert("❌ ভুল নাম্বার বা পাসওয়ার্ড! অনুগ্রহ করে সঠিক তথ্য দিন।");
        }
    });
});
