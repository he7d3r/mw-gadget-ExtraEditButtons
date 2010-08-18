if ( typeof $j != 'undefined' && typeof $j.fn.wikiEditor != 'undefined' ) {
	$j(document).ready( function() {
		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'advanced',
			'group': 'format',
			'tools': {
				'my-code': {
					label: 'Código',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/2/23/Button_code.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<code>",
							post: "</code>"
						}
					}
				},
			}
		} );
	} );
}