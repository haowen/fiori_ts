/*******************************************************************************
* change_content.js
********************************************************************************
* @file         change_content.js
*
* @version      change_content $Rev: 0 $
* @copyright    Copyright (C) 2007 S+P LION AG
*
* @brief        javascripts for the SAP-Partner-Portal homepage
*
* @author       Andreas Christ <andreas.christ@sp-lion.com>
*
* @date         28.02.2008 09:44 / Andreas Christ
*                 - cursor bei nav_bar wird zur Hand bei mouseover.
* @date         10.01.2008 18:19 / Andreas Christ
*                 - Fix fuer expand.
* @date         09.01.2008 09:45 / Andreas Christ
*                 - Anpassung fuer expand.
* @date         05.12.2007 13:57 / Andreas Christ
*                 - Umstellung fuer PCA.
* @date         20.11.2007 13:52 / Andreas Christ
*                 - iframes als Datenquelle eingefuehrt.
*                 - DIV-name kann gewaehlt werden.
* @date         18.11.2007 22:31 / Andreas Christ
*                 Pilot.
*
*******************************************************************************/

//==============================================================================
// CLASSES
//==============================================================================

// Klasse Navigation -----------------------------------------------------------
function change_content( div_name, expand_div, expand_size )
  {
    var navi_list = new Array();

    var prekey = 'navi_id_';
    var pre_iframe = 'iframe_id_';
    var content_div = div_name;
    var ex_div = expand_div;
    var ex_size = expand_size;

    var _iframe = new Array();


    //------------------------------------------------------------------------
     this.change = function( idx )
    //------------------------------------------------------------------------
    // public
    // @brief   : Insert a new parameter-array in the navigation.
    // @param   : idx   Index of selected span
    //------------------------------------------------------------------------
      {
        var obj = document.getElementById( content_div );
        // aktuellen Frame ermitteln
        var iframe_obj = _iframe[idx];
        // document-Objekt des iframes holen
        var iframe_doc = iframe_obj.contentWindow.document;
        // Body-Tag extrahieren
        //obj.innerHTML = iframe_doc.body.innerHTML;
        obj.innerHTML = iframe_doc.getElementById(content_div).innerHTML;
      }  // changet()


    //------------------------------------------------------------------------
    this.push = function( _label, _href )
    //------------------------------------------------------------------------
    // public
    // @brief   : Insert a new parameter-array in the navigation.
    // @param   : _label  Label for the link-span
    // @param   : _href   href of html-file
    //------------------------------------------------------------------------
      {
        var last_idx = navi_list.length;
        var _key = pre_iframe + last_idx;
        navi_list.push( new Array( _label, _href ) );
        _iframe[last_idx] = document.createElement( 'iframe' );
        _iframe[last_idx].src = _href;
        _iframe[last_idx].id = _key;
        _iframe[last_idx].style.display = 'none';
      }  // push()


    //------------------------------------------------------------------------
    this.prepare = function()
    //------------------------------------------------------------------------
    // public
    // @brief   : iFrames in das Dokument einfuegen.
    //------------------------------------------------------------------------
      {
        for( var idx=0; idx <navi_list.length; idx++ )
          {
            document.body.appendChild(_iframe[idx]);
          }
      }  // prepare()



    //------------------------------------------------------------------------
    this._write_navi = function()
    //------------------------------------------------------------------------
    // public
    // @brief   : xxx.
    //------------------------------------------------------------------------
      {

        for( var idx=0; idx <navi_list.length; idx++ )
          {
            var label = navi_list[idx][0];
            var _href = navi_list[idx][1];
            var _id   = prekey + idx;

            var code = '<span id="';
                code += _id;
                code += '" class="change_content_nav" onclick="content.change(' + idx + '); expand_height_home( \'' + ex_div + '\' );"> ';
                code += label;
                code += ' </span>';

            document.write( "\n" + code );
          }  // for idx ...
      }  // write_navi()


    //------------------------------------------------------------------------
    this.write_navi = function()
    //------------------------------------------------------------------------
    // public
    // @brief   : xxx.
    //------------------------------------------------------------------------
      {
        var now = new Date();
        var navbar_div = 'navbar_' + now.getTime();
        var code = new Array();
        code.push( '<!-- navibar START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->' );
        code.push( '<div class="nav_bar" onmouseover="this.style.cursor=\'pointer\';">' );
        code.push( '  <div class="left"></div>' );
        code.push( '    <div id="' + navbar_div + '" class="center">' );
        code.push( '    <script language="javascript" type="text/javascript">' );

          for( var idx=0; idx <navi_list.length; idx++ )
            {
              var label = navi_list[idx][0];
              var _href = navi_list[idx][1];
              var _id   = prekey + idx;
              var _onclick = 'content.change(' + idx + '); expand_height_home( \\\'' + ex_div + '\\\' );';
              code.push( 'document.write( nav_button( \'' + navbar_div + '\', \'' + _id + '\', false , \'' + label + '\', \'' + _onclick + '\') );' );
            }  // for idx ...

        code.push( '    </script>' );
        code.push( '    </div>' );
        code.push( '  <div class="right"></div>' );
        code.push( '</div>' );
        code.push( '<div style="clear: both;"></div>' );
        code.push( '<!-- navibar END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->' );
        document.write( "\n" + code.join( "\n" ) );
      }  // write_navi()

  }  // class


//==============================================================================
// FUNCTIONS
//==============================================================================

//----------------------------------------------------------------------------
function expand_height_home( div_id )
//----------------------------------------------------------------------------
// @author  : Andreas Christ
// @date    : 28.02.2008 12:07 / Andreas Christ
//              Pilot.
// @brief   : Expand the height of the content.
// @param   : div_id  -> ID of the content-main DIV.
// @param   : _offset -> offset of the upper div in px.
//
// @return  : -none-
//----------------------------------------------------------------------------
  {
    var div_obj = document.getElementById( div_id );
    div_obj.style.height = '100%';

//var xxx = document.getElementById('content-center');
//xxx.style.display = 'none';
//xxx.style.display = 'block';
  }  // expand_height_home()
