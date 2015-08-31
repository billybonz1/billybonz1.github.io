var docWidth, docHeight, docRatio, div = document.getElementById('logo');

onresize = function()
{
    docWidth = document.getElementById('wrap').clientWidth;
    docHeight = document.getElementById('wrap').clientHeight;
    // ширина и высота вьюпорта

    docRatio = docWidth / docHeight;
    // соотношение сторон вьюпорта

    fullScreenProportionalElem(div, 640, 300); // элемент, ширина, высота
    // размер шрифта зависит от выставленной ширины и высоты
}

function fullScreenProportionalElem(elem, width, height)
{
    var ratio = width / height;
    // соотношение сторон элемента

    if (docRatio < ratio)
    {
        elem.style.width = docWidth + 'px';
        elem.style.height = Math.round(docWidth / ratio) + 'px';
        // высота вьюпорта больше чем высота элемента
        // ширину элемента приравниваем к ширине вьюпорта, высоту вычисляем
        // центрируем элемент по высоте
    }
    else if (docRatio > ratio)
    {
        elem.style.width = Math.round(docHeight * ratio) + 'px';
        elem.style.height = docHeight + 'px';
        // ширина вьюпорта больше чем ширина элемента
        // высоту элемента приравниваем к высоте вьюпорта, ширину вычисляем
        // центрируем элемент по ширине
    }
    else
    {
        elem.style.width = docWidth + 'px';
        elem.style.height = docHeight + 'px';
        // соотношение сторон вьюпорта равно соотношению сторон элемента
        // приравниваем стороны элемента к сторонам вьюпорта
    }
}



onresize();
