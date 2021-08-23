const signOut = () => {
    firebase.auth().signOut().then(() => {
        alert("Successfully Signed Out");
        location.href = ""
    }).catch((err) => {
        console.log(err);
        alert("Something Went Wrong at Signing out")
    })
};


// create prioduct
const addProduct = async () => {
    const productName = document.getElementById("product-name-input");
    const productPrice = document.getElementById("product-price-input");
    const productDescription = document.getElementById("product-description-input");
    const productImage = document.getElementById("product-image-input");
    let creatorId = firebase.auth().currentUser.uid;
    var dataToSave = {
        creatorId,
        productName: productName.value,
        productPrice: productPrice.value,
        productDescription: productDescription.value

};

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})