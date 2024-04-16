 function starReiting(rating) {



    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    
    let starRating = '';
    
    for (let i = 0; i < fullStars; i++) {
        starRating += '<img src="full-star.svg" alt="Full Star">';
    }
    
    if (halfStars) {
        starRating += '<img src="half-star.svg" alt="Half Star">';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starRating += '<img src="empty-star.svg" alt="Empty Star">';
    }
    
    // // Додайте відображення зірочок в DOM-елемент
    document.getElementById('star').innerHTML = starRating;
}


export default starReiting
// Використання функції для відображення рейтингу 4.5
// starReiting(4.5);