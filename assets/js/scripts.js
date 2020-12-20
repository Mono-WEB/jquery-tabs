// $(function() {
//     $('.left').on('click', function(e) {

//         let leftElem = $(e.target).data('name')
//         let leftChildren = $(e.target).children().data('name')
//         let rightElem = $('.right__block')

//         $.each(rightElem, function(elemn, item) {
            
//             if(($(item).attr('id') == leftElem ) && !$(item).hasClass('right--active')) {
//                 $.each(rightElem, function(el, item) {
//                     $(item).removeClass('right--active');
//                 })
//                 $(item).addClass('right--active');
//             } 
                
//         })
    
        
//     })
// })



$(function() {

    let rightElem = $('.right__block')
    let allLeft = $('.left__item')

    $('.left__item').on('mouseover', function(e) {
        let leftItem = $(e.currentTarget)
        $.each(rightElem, function(index, item) {
            $.each(allLeft, function (i, elem) {
                $(elem).removeClass('left--active')
            })

            if(leftItem.data('name') == $(item).attr('id')) {
                $(item).addClass('show__block');                
            } else {
                $(item).removeClass('show__block');
            }
        })
    })
    
})

