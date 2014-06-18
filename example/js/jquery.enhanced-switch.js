(function ($) {    
    var methods = {
        init : function() {
            this.each(function () {
                $(this).attr("data-state", "false");
                $(this).addClass("es-switch-bg");
                $(this).append("<div class='es-toggle'></div>");
            });
        },
        toggle : function () {
            this.each(function () {
                var toggle = $(this);
                if(toggle.attr("data-state") === "false")
                {
                    toggle.enhancedSwitch('setTrue')
                }
                else
                {
                    toggle.enhancedSwitch('setFalse');
                }
            });
        },
        state : function() {
            var returnVal = true;

            if(this.first().attr("data-state") === "false")
            {
                returnVal = false;
            }
            else
            {
                returnVal = true;
            }

            return returnVal;
        },
        setTrue : function () {
            this.each(function () {
                $(this).first().attr("data-state", "true");
            });
        },
        setFalse : function () {
            this.each(function () {
                $(this).first().attr("data-state", "false");
            });
        }
    }
    
    $.fn.enhancedSwitch = function (method) {
        if(methods[method])
        {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof(method) === 'object' || method === undefined)
        {
            return methods.init.apply(this, arguments);
        }
        else
        {
            $.error('Method ' + method + ' does not exist in jQuery.enhancedSwitch');
        }
    } 
}(jQuery));