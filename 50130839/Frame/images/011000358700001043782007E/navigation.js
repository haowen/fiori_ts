/*******************************************************************************
* navigation.js
********************************************************************************
* @file         navigation.js
*
* @version      SAP ReDesign.2007 $Rev: 0 $
* @copyright    Copyright (C) 2007 SAP AG
*
* @brief        Navigation JavaScripts for SAP Websites 2007.
*
* @author       Andreas Christ <andreas.christ@sp-lion.com>
*
* @date         09.11.2007 10:28 / Andreas Christ
*                 Pfade auf Object-ID angepasst.
* @date         09.11.2007 00:25 / Andreas Christ
*                 Pilot.
*
*******************************************************************************/

//==============================================================================
// CLASSES
//==============================================================================


//==============================================================================
// FUNCTIONS
//==============================================================================

//----------------------------------------------------------------------------
function quicksearch( _action, preload, _clear )
//----------------------------------------------------------------------------
// @author  : Andreas Christ
// @date    : 08.11.2007 22:49 / Andreas Christ
//              Pilot.
// @brief   : Change the Quicksearch-image on mouseover and mouseout.
// @param   : _action -> form-action
// @param   : preload -> preload of input-value
// @param   : _clear  -> clear input field onfocus (0:not | 1:clear)
//
// @return  : true  -> erfolgreich
//            false -> hat keine Childs
//----------------------------------------------------------------------------
  {
    var code = new Array();
    var image = '/~sapidb/011000358700001043782007E/search_gold.jpg';
    var hover = '/~sapidb/011000358700001043782007E/search_blue.jpg';

    var clr = ( _clear == 1 ) ? 'onfocus="this.value=\'\';"'
                              : '';

    code.push( "\n" );
    code.push( '<!-- QuickSearch -->' );
    code.push( '<form id="quicksearch" action="' + _action + '">' );
    code.push( '  <input ' + clr );
    code.push( '         class="text"' );
    code.push( '         name="searchfield"' );
    code.push( '         type="text"' );
    code.push( '         value="' + preload + '"><input class="button"' );
    code.push( '                               name="searchbutton"' );
    code.push( '                               type="image"' );
    code.push( '                               src="' + image + '"' );
    code.push( '                               alt="&gt;"' );
    code.push( '                               onmouseover="this.src=\'' + hover + '\';"' );
    code.push( '                               onmouseout="this.src=\'' + image + '\';">' );
    code.push( '</form>' );
    code.push( '<!-- /QuickSearch -->' );

    document.write( code.join("\n") );
  }  // quicksearch()