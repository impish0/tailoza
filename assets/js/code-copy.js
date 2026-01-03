// Code copy functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
    // Process all code blocks
    document.querySelectorAll('pre').forEach(function(pre) {
        var code = pre.querySelector('code');
        if (!code) return;
        
        var language = '';
        
        // Extract language from class name
        var classes = code.className.split(' ');
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].startsWith('language-')) {
                language = classes[i].replace('language-', '');
                break;
            }
        }
        
        if (language && language !== 'language-') {
            // Create wrapper div
            var wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            
            // Create header
            var header = document.createElement('div');
            header.className = 'code-block-header';
            
            var langSpan = document.createElement('span');
            langSpan.className = 'code-language';
            langSpan.textContent = language;
            
            var button = document.createElement('button');
            button.className = 'copy-button';
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
            button.title = 'Copy code';
            
            header.appendChild(langSpan);
            header.appendChild(button);
            
            // Insert wrapper and move pre into it
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);
            
            // Add click handler
            button.addEventListener('click', function() {
                var text = code.textContent || code.innerText;
                navigator.clipboard.writeText(text).then(function() {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>';
                    setTimeout(function() {
                        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
                    }, 2000);
                });
            });
        } else {
            // No language, add button directly to pre
            var button = document.createElement('button');
            button.className = 'copy-button';
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
            button.title = 'Copy code';
            
            pre.appendChild(button);
            
            // Add click handler
            button.addEventListener('click', function() {
                var text = code.textContent || code.innerText;
                navigator.clipboard.writeText(text).then(function() {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>';
                    setTimeout(function() {
                        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
                    }, 2000);
                });
            });
        }
    });
    
    // Re-run Prism highlighting after DOM manipulation
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});