placeholder
===========

### 一个输入提示的jquery插件，和HTML5 PlaceHolder属于一致。

  插件介绍：当用户没有输入的情况下，在输入框中一些提示信息。当用户开始输入时，提示信息自动消失。
  
  运用场景：input输入框
  
  引用文件： _jquery.placeholder.js

系统会判断浏览器是否支持PlaceHolder属性，如果支持的话，将使用浏览器自带功能

代码示例
---------
 **Html**
 <pre>
  &lt;p&gt;&lt;span&gt;mail: &lt;/span&gt;&lt;input type="text" class="inp" placeholder="xx@xx.com"/&gt;&lt;/p&gt;
</pre>


**Javascript**
<pre>
$(".inp").placeholder(); 
</pre>

版本历史
--------
v 0.0.1     beta    2014-8-1
