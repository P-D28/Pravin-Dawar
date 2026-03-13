const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const gallery = fs.readFileSync('gallery.html', 'utf8');

const target = '<section id="testimonials" class="section bg-alt">';
const newIndex = index.replace(target, gallery + '\n\n    ' + target);

fs.writeFileSync('index.html', newIndex);
