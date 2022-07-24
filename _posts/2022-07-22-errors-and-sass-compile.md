---
layout: post
---

<section>
        <div class="card">
          <div class="card-title">
            <h2>How to compile sass</h2>
          </div>
          <div class="card-info">

            {% highlight css %}

                Syntax: sass <input.scss> [output.css]
                $ sass style.scss:style.css
            {% endhighlight %}


            <h2>Many-to-many Mode
            </h2>
            <p>​# Compiles all Sass files in themes/ to CSS files in public/css/.
            </p>
            <p>
              <code class=".mycode">$ sass themes:public/css</code>
            </p><br>
            <a href="https://sass-lang.com/documentation/cli/dart-sass">Sass official dart sass documentation</a>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <h1>Errors in JS</h1>
            <h2>Uncaught Syntax error</h2>
          </div>
          <div class="card-info">
            <pre>
              <code class="language-javascript">
                function printArray(array) {
                  return (...array)
                }
                printArray()
                </code>
            </pre>

          </div>
          <p>Above code yields <b>Uncaught SyntaxError</b>: Unexpected token '...'. <br> Keyword return accepts data
            types
            string,
            number, boolean,array or an object but not spread operator.
          </p>
          <h2>Uncaught Type error</h2>

          <pre>
            <code class="language-javascript">
                    function printArray(array) {
                      console.log(...array)
                    }
                    printArray()
                <p>If we change function, with console.log to log the array like this,</p>                                                 </code>
                                  </pre>
          <p>Above code yields "<b>Uncaught TypeError</b>: array is not iterable (cannot read property undefined)
            ". It means when we call a function without a parameter, it returns undefined.</p>
        </div>
      </section>
