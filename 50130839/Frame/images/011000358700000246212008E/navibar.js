/*******************************************************************************
* navibar.js
********************************************************************************
* @file         navibar.js
*
* @version      ReDesign.2007 $Rev: 34 $
* @copyright    Copyright (C) 2008 SAP AG
*
* @brief        Navigation Bar
*
* @author       Andreas Christ <andreas.christ@sp-lion.com>
*
* @date         28.02.2008 15:56 / Andreas Christ
* @date         05.02.2008 15:10 / Andreas Christ
*                 Pilot.
*
*******************************************************************************/

//==============================================================================
// FUNCTIONS
//==============================================================================

var img_dir = '/~sapidp/011000358700000246212008E/';

//----------------------------------------------------------------------------
function nav_button( _group, _id, _active, label, _onclick )
//----------------------------------------------------------------------------
// @author  : Andreas Christ
// @date    : 05.02.2008 15:23 / Andreas Christ
// @date    : 03.01.2008 10:58 / Andreas Christ
// @date    : 21.12.2007 13:58 / Andreas Christ
//              Pilot.
// @brief   : Create the code for a navigation-button.
// @param   : _group    -> gehoert zur Gruppe _group => ID des direkt umgebenden DIVs
// @param   : _id       -> Button-ID
// @param   : _active   -> active(true) or passive (false)
// @param   : label     -> text in button
// @param   : _onclick  -> onclick-action
//
// @return  : HTML-Code
//----------------------------------------------------------------------------
  {
    var _status = ( _active ) ? 'active' : 'passive';
    var code = new Array();
    // mouse events
    var _click  = 'onclick="nav_button_change(this, \'' + _group + '\'); ';
        _click += _onclick;
        // Ist das letzte Zeichen ein Semikolon ?
        _onclick = _onclick.replace(/ $/g, '' );
        _onclick = _onclick.replace(/\;$/g, '' );
        _click += '"';
    var _onmouseover  = 'onmouseover="nav_button_hover(this, true);" ';
    var _onmouseout   = 'onmouseout="nav_button_hover(this, false);" ';
    code.push( '<div ' + _click + _onmouseover + _onmouseout + ' id="' + _id + '" class="button ' + _status + '">' );
    code.push( '<img name="' + _group + '" id="' + _id + '_img" src="' + img_dir + 'arrow_' + _status + '.jpg" alt="" style="padding-right: 5px;">' );
    code.push( label );
    code.push( '</div>' );
    code.push( '<img src="' + img_dir + 'spacer.jpg" alt="" style="margin-top:1px;">' );

    return( code.join( "" ) + "\n" );
  }  // nav_button()


//----------------------------------------------------------------------------
function nav_button_change( div_obj, _group )
//----------------------------------------------------------------------------
// @author  : Andreas Christ
// @date    : 03.01.2008 11:02 / Andreas Christ
//              Pilot.
// @brief   : Change the button-status.
// @param   : div_obj   -> aktuelles DIV-Object
// @param   : _group    -> gehoert zur Gruppe _group => ID des direkt umgebenden DIVs
//
// @return  : true|false
//----------------------------------------------------------------------------
  {
    // Objekt-Liste ermitteln
    var bttn_list = document.getElementById( _group ).getElementsByTagName( 'div' );
      // Alle DIVs suchen und auf Klasse "button passive" setzen
      for( var bttn=0; bttn<bttn_list.length; bttn++ )
        {
         bttn_list[bttn].className = 'button passive';
         document.getElementById( bttn_list[bttn].id + '_img' ).src = img_dir + 'arrow_passive.jpg';

        }
    // aktivierten Button auf active setzen
    div_obj.className = 'button active';
    document.getElementById( div_obj.id + '_img' ).src = img_dir + 'arrow_active.jpg';

    return( true );
  }  // nav_button_change()


//----------------------------------------------------------------------------
function nav_button_hover( div_obj, _hover )
//----------------------------------------------------------------------------
// @author  : Andreas Christ
// @date    : 03.01.2008 10:07 / Andreas Christ
//              Pilot.
// @brief   : Effected a hover.
// @param   : div_obj   -> DIV-Object welches die Grafik beinhaltet
// @param   : _hover    -> Hover (true|false)
//
// @return  : true|false
//----------------------------------------------------------------------------
  {
    // Aktuelle Klasse ermitteln (active|passive)
    var _status = ( div_obj.className.search(/ active/) != -1 ) ? 'active' : 'passive';

      // bei class=active wird kein hover angewendet !
      if( _status == 'active' )
        {
          return( false );
        }  // if _status ...
      else
        {
          var _img = img_dir + 'arrow_';
              _img += ( _hover ) ? 'hover' : 'passive';
              _img += '.jpg';

          var img_obj = document.getElementById( div_obj.id + '_img' );
          img_obj.src = _img;
        }  // else _status ...
    return( true );
  }  // nav_button_hover()
