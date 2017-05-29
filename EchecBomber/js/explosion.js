
///////////////  TOUR  ///////////////

function get_explosion_vertical(x, y){

    var result = [];

    for(var py=0; py<8; py++){
        result.push($('.'+x+'-'+py));
    }

    return result;
}

function get_explosion_horizontal(x, y){

    var result = [];

    for(var px=0; px<8; px++){
        result.push($('.'+px+'-'+y));
    }

    return result;
}


///////////////  FOU  ///////////////

function get_explosion_diagonal(x, y){

    var result = [];

    var final_left = false;
    var final_right = false;
    var left_pos = {
        x: x-1,
        y: y+1
    };
    var right_pos = {
        x: x+1,
        y: y-1
    };

    while(final_left === false || final_right === false){

        // left up
        if(left_pos.x<0 || left_pos.y>7){
            final_left = true;
        }else{
            result.push($('.'+left_pos.x+'-'+left_pos.y));
            left_pos.x -=1;
            left_pos.y +=1;
        }

        // right down
        if(right_pos.y<0 || left_pos.x>7){
            final_right = true;
        }else{
            result.push($('.'+right_pos.x+'-'+right_pos.y));
            right_pos.y -=1;
            right_pos.x +=1;
        }
    }

    var final_up = false;
    var final_down = false;
    var up_pos = {
        x: x-1,
        y: y-1
    };
    var down_pos = {
        x: x+1,
        y: y+1
    };

    while(final_up === false || final_down === false){

        // left up
        if(up_pos.x>7 || up_pos.y>7){
            final_up = true;
        }else{
            result.push($('.'+up_pos.x+'-'+up_pos.y));
            up_pos.x +=1;
            up_pos.y +=1;
        }

        // right down
        if(down_pos.x<0 || up_pos.y<0){
            final_down = true;
        }else{
            result.push($('.'+down_pos.x+'-'+down_pos.y));
            down_pos.y -=1;
            down_pos.x -=1;
        }
    }

    return result;
}

///////////////  ROI  ///////////////

function get_explosion_square(x, y){

    var result = [];

    var left_up_pos = {x: x-1,y: y+1};
    var right_down_pos = {x: x+1,y: y-1};
    var left_down_pos = {x: x+1,y: y+1};
    var right_up_pos = {x: x-1,y: y-1};
    var left_pos = {x: x+1,y: y};
    var right_pos = {x: x-1,y: y};
    var up_pos = {x: x,y: y+1};
    var down_pos = {x: x,y: y-1};

    result.push($('.'+left_up_pos.x+'-'+left_up_pos.y));
    result.push($('.'+left_down_pos.x+'-'+left_down_pos.y));
    result.push($('.'+right_down_pos.x+'-'+right_down_pos.y));
    result.push($('.'+right_up_pos.x+'-'+right_up_pos.y));
    result.push($('.'+left_pos.x+'-'+left_pos.y));
    result.push($('.'+right_pos.x+'-'+right_pos.y));
    result.push($('.'+up_pos.x+'-'+up_pos.y));
    result.push($('.'+down_pos.x+'-'+down_pos.y));


    return result;
}

function add_class_to_array( css_class, target){

    $(target).each(function(id, el) {
        $(el).addClass(css_class);
    });
}
