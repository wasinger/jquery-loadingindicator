;(function($) {
    $.loading_indicator = {
        /**
         * Function to be called when loading starts.
         * Replace $.loading_indicator.startfunction by your own custom function that shows a fancy spinner.
         *
         * @param {jQuery} $element jQuery object that holds the element where the loading indicator is displayed
         */
        startfunction: function($element) {
            if (window.console) console.log('$.loading_indicator.startfunction not implemented');
            $element.css({'opacity': 0.3, 'cursor': 'wait'})
        },
        /**
         * Function to be called when loading stops.
         * Replace $.loading_indicator.stopfunction by your own custom function that removes your fancy spinner.
         *
         * @param {jQuery} $element jQuery object that holds the element where the loading indicator is displayed
         */
        stopfunction: function($element) {
            if (window.console) console.log('$.loading_indicator.stopfunction not implemented');
            $element.css({'opacity': '', 'cursor': ''});
        }
    };

    /**
     * This is the public API to indicate that an element on an HTML page is loading.
     *
     * Usage:
     *
     * $('.my-selector').loading_indicator() to start indicating that the element is loading
     *
     * $('.my-selector').loading_indicator('stop') to stop indicating that the element is loading
     *
     * @param {string} method
     * @returns {jQuery}
     */
    $.fn.loading_indicator = function(method) {
        return this.each(function () {
            if (method === 'stop') {
                $.loading_indicator.stopfunction($(this));
            } else {
                $.loading_indicator.startfunction($(this));
            }
        });
    }
})(jQuery);