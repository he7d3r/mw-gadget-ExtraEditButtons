/**
 * Add some extra buttons to enhanced edit toolbar
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/ExtraEditButtons.js]] ([[File:User:Helder.wiki/Tools/ExtraEditButtons.js]])
 */
/*jslint browser: true, white: true, regexp: true*/
/*global jQuery, mediaWiki */
( function ( $, mw ) {
'use strict';

function customizeToolbar() {
	var $edit = $( '#wpTextbox1' );
	if ( /^Helder\.wiki(\.bot)?$/.test( mw.config.get( 'wgUserName' ) ) ) {

		$('.tab-advanced').find('a').text('Mais!');
		$('.tab-characters').find('a').text('Caracteres');

		$edit.wikiEditor( 'removeFromToolbar', { 'section': 'main', 'group': 'insert', 'tool': 'linkCGD' } )
		.wikiEditor( 'removeFromToolbar', { 'section': 'main', 'group': 'insert', 'tool': 'signature' } )
		.wikiEditor( 'removeFromToolbar', { 'section': 'help' } )
		.wikiEditor( 'removeFromToolbar', { 'section': 'advanced', 'group': 'format', 'tool': 'newline' } )
		.wikiEditor( 'addToToolbar', {
			'section': 'main',
			'group': 'insert',
			'tools': {
				'my-sign': {
					label: 'Corrigir minha assinatura',
					type: 'button',
					icon: '//upload.wikimedia.org/wikipedia/commons/2/27/Vector_toolbar_signature_button.png',
					action: {
						type: 'callback',
						execute: function() {
							var	proj = ( mw.config.get( 'wgServer' ).indexOf('wikibooks') > -1) ? '' : 'b:',
								lang = ( 'pt' === mw.config.get( 'wgContentLanguage' ) ) ? '' : 'pt:';
							if ( !proj && lang ) {
								proj = ':';
							}
							$edit.text( function() {
								var	reOldSign = window.reOldSign || /OLDSIGNATURE/g;
									newSign = '[[' + proj + lang + 'User:Helder.wiki|Helder]]';
								this.value = this.value.replace( reOldSign, newSign );
							} );
							$( '#wpMinoredit' ).attr('checked', true);
							$( '#wpSummary' ).val( 'Fixing links (my user account was renamed)' );
							$( '#wpDiff' ).submit();
						}
					}
				}
			}
		} );
	}
	$edit.wikiEditor( 'addToToolbar', {
		'sections': {
			'imagens': {
				'type': 'toolbar',
				'label': 'Imagens'
			}
		}
	} )
	.wikiEditor( 'addToToolbar', {
		'section': 'advanced',
		'group': 'format',
		'tools': {
			'my-code': {
				label: 'Código',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/2/23/Button_code.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<code>', post: '</code>' }
				}
			},
			'my-pre': {
				label: 'Código pré-formatado',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/3/3c/Button_pre.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<pre>', post: '</pre>' }
				}
			},
			'my-source': {
				label: 'Código-fonte',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/d/d2/Button_source.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<syntaxhighlight lang="javascript" enclose="pre">\n', post: '\n</syntaxhighlight>' }
				}
			},
			'my-comment': {
				label: 'Comentário',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/3/3b/Comment-button-bg.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<!-- ', post: ' -->' }
				}
			}
		}
	} )
	.wikiEditor( 'addToToolbar', {
		'section': 'imagens',
		'groups': {
			'faces': {
				'label': 'Carinhas',
				'tools': {
					'sad': {
						label: 'Triste',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/d/d8/Sad.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Sad.png]]' }
						}
					},
					'smile': {
						label: 'Sorriso',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/2/26/Smile.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Smile.png]]' }
						}
					},
					'teeth': {
						label: 'Sorridente',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/7/72/Teeth.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Teeth.png]]' }
						}
					},
					'tongue': {
						label: 'Levado',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/c/c4/Tongue.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Tongue.png]]' }
						}
					},
					'confused': {
						label: 'Confuso',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/6/68/Confused.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Confused.png]]' }
						}
					},
					'cry': {
						label: 'Lágrimas',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/d/d8/Cry.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Cry.png]]' }
						}
					},
					'wink': {
						label: 'Piscando',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/9/9a/Wink.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Wink.png]]' }
						}
					},
					'sleeping': {
						label: 'Dormindo',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/3/38/Sleeping.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Sleeping.png|27px]]' }
						}
					},
					'hello': {
						label: 'Olá!',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/f/f8/Waving.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Waving.png|27px]]' }
						}
					},
					'sifflote': {
						label: 'Apito',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/3/30/Sifflote.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Sifflote.png|27px]]' }
						}
					}
				}
			},
			'outras': {
				'label': 'Outras',
				'tools': {
					'agree': {
						label: 'Concordo',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/c/c8/Button_conserver2.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Symbol support vote.svg|15px]] \'\'\'Concordo\'\'\'' }
						}
					},

					'disagree': {
						label: 'Discordo',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/0/00/Button_supprimer.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Symbol oppose vote.svg|15px]] \'\'\'Discordo\'\'\'' }
						}
					},
					'done': {
						label: 'Feito',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/4/4e/Button_fait2.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Yes check.svg|15px]] \'\'\'Feito\'\'\'' }
						}
					},
					'comment': {
						label: 'Comentário',
						type: 'button',
						icon: '//upload.wikimedia.org/wikipedia/commons/4/4d/Button_reticence.png',
						action: {
							type: 'encapsulate',
							options: { pre: '[[Image:Symbol comment vote.svg|15px]] \'\'\'Comentário\'\'\'' }
						}
					}
				}
			}
		}
	} )
	.wikiEditor( 'addToToolbar', {
		'section': 'main',
		'group': 'insert',
		'tools': {
			'my-green': {
				label: 'Texto verde sobre fundo branco',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/8/8d/Button_rouge.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<span style="color: #060; background: #fff;">', post: '</span>' }
				}
			},
			'my-red-background': {
				label: 'Texto preto sobre fundo vermelho',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/1/1d/Button_base_red.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<span style="color: #000; background: #E99;">', post: '</span>' }
				}
			},
			'my-green-background': {
				label: 'Texto preto sobre fundo verde',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/6/6f/Button_base_green.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<span style="color: #000; background: #9E9;">', post: '</span>' }
				}
			}
		}
	} );

	if ( 'ptwikibooks' === mw.config.get( 'wgDBname' )  ) {
		$edit.wikiEditor( 'addToToolbar', {
			'sections': {
				'admin': {
					'type': 'toolbar',
					'label': 'Manutenção'
				}
			}
		} )
		.wikiEditor( 'addToToolbar', {
			'section': 'admin',
			'groups': {
				'tags': {
					'label': 'Marcações',
					'tools': {
						'speed-deletion-heading': {
							'label': 'Eliminação rápida',
							'type': 'select',
							'list': {
								'spam' : {
									'label': 'Propaganda ou SPAM',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Propaganda ou SPAM|~~' + '~~}}\n'
										}
									}
								},
								'vandal' : {
									'label': 'Vandalismo',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Vandalismo|~~' + '~~}}\n'
										}
									}
								},
								'HOAX' : {
									'label': 'HOAX',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|HOAX}}\n'
										}
									}
								},
								'exercises' : {
									'label': 'Trabalhos escolares e pedidos de resolução de exercícios',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Pedido de resolução de exercícios|~~' + '~~}}\n'
										}
									}
								},
								'nonsense' : {
									'label': 'Lixo ou texto sem sentido (nonsense)',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Texto sem sentido (nonsense)|~~' + '~~}}\n'
										}
									}
								},
								'test' : {
									'label': 'Teste',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Teste feito fora da [[Wikilivros:Caixa de areia|página adequada]]|~~' + '~~}}\n'
										}
									}
								},
								'porn' : {
									'label': 'Pornografia',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Pornografia|~~' + '~~}}\n'
										}
									}
								},
								'ofensive' : {
									'label': 'Conteúdo ofensivo',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Conteúdo ofensivo|~~' + '~~}}\n'
										}
									}
								},
								'VDA' : {
									'label': 'Plágio ou violação dos direitos de autor (VDA)',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{VDA|1=',
											post: '}}\n'
										}
									}
								},
								'talkofdeletedpage' : {
									'label': 'Discussão de página excluída',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Discussão de página excluída|~~' + '~~}}\n'
										}
									}
								},
								'userreq' : {
									'label': 'Pedido do autor',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Pedido do autor}}\n'
										}
									}
								},
								'expired' : {
									'label': 'Período de adequação expirado',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Período de adequação expirado|~~' + '~~}}\n'
										}
									}
								},
								'unnecessaryredir' : {
									'label': 'Redirecionamento desnecessário',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Redirecionamento desnecessário|~~' + '~~}}\n'
										}
									}
								},
								'badredirect' : {
									'label': 'Redirecionamento com título inaceitável',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Redirecionamento com título inaceitável|~~' + '~~}}\n'
										}
									}
								},
								'emptycat' : {
									'label': 'Categoria vazia',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Categoria vazia|~~' + '~~}}\n'
										}
									}
								},
								'renamedcat' : {
									'label': 'Categoria renomeada',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Categoria renomeada para [[Categoria:',
                                            post: ']]|~~' + '~~}}\n'
										}
									}
								},
								'usersubpage' : {
									'label': 'Subpágina de usuário',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Subpágina de usuário|~~' + '~~}}\n'
										}
									}
								},
								'inexistentuser' : {
									'label': 'Usuário inexistente',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{ER|Usuário inexistente|~~' + '~~}}\n'
										}
									}
								}
							}
						},
						'othertags-heading': {
							'label': 'Outras',
							'type': 'select',
							'list': {
								'wikipedia' : {
									'label': 'Conteúdo enciclopédico',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{Inadequado|Conteúdo enciclopédico não é livro didático|[[w:{' + '{subst:PAGENAME}}]] (se cumprir as regras da Wikipédia, como [[w:WP:N|notabilidade]], [[w:WP:V|verificabilidade]] por [[w:WP:FF|fontes fiáveis]], etc...)',
											post: '|~~' + '~~}}\n'
										}
									}
								},
								'deletionrequest' : {
									'label': 'Propor eliminação por votação',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{eliminação}}\n'
										}
									}
								},
								'inadequate' : {
									'label': 'Inadequado',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{Inadequado|Não é um livro didático|',
											post: '|~~' + '~~}}\n'
										}
									}
								},
								'rename' : {
									'label': 'Renomear',
									'action': {
										'type': 'encapsulate',
										'options': {
											pre: '{' + '{Renomear}}\n'
										}
									}
								}
							}
						}
					}
				},
				'welcome': {
					'label': 'Boas-vindas',
					'tools': {
						'bv': {
							label: 'Boas-vindas para usuário registrado',
							type: 'button',
							icon: '//upload.wikimedia.org/wikipedia/commons/3/30/Bv_icon.png',
							action: {
								type: 'encapsulate',
								options: { pre: '{' + '{subst:bv}}', post: ' ~~' + '~~\n' }
							}
						},
						'bv-ip': {
							label: 'Boas-vindas para usuário anônimo',
							type: 'button',
							icon: '//upload.wikimedia.org/wikipedia/commons/5/54/Bvip_icon.png',
							action: {
								type: 'encapsulate',
								options: { pre: '{' + '{subst:bv-ip}}', post: ' ~~' + '~~\n' }
							}
						},
						'bv-av': {
							label: 'Boas-vindas e aviso',
							type: 'button',
							icon: '//upload.wikimedia.org/wikipedia/commons/e/ec/Button_aviso.png',
							action: {
								type: 'encapsulate',
								options: { pre: '{' + '{subst:bv-av|', post: '}} ~~' + '~~\n' }
							}
						}
					}
				}
			}
		} );
	} else {
		$edit.wikiEditor( 'addToToolbar', {
			'section': 'main',
			'group': 'insert',
			'tools': {
				'my-math': {
					label: 'Fórmula matemática',
					type: 'button',
					icon: '//upload.wikimedia.org/wikipedia/commons/7/7d/Button_equation_he.png',
					action: {
						type: 'encapsulate',
						options: { pre: '<math>', post: '</math>' }
					}
				}
			}
		} )
		.wikiEditor( 'addToToolbar', {
			'section': 'main',
			'group': 'format',
			'tools': {
				'my-strikethrough': {
					label: 'Riscado',
					type: 'button',
					icon: '//upload.wikimedia.org/wikipedia/commons/c/c9/Button_strike.png',
					action: {
						type: 'encapsulate',
						options: { pre: '<s>', post: '</s>' }
					}
				}
			}
		} );
	}
}
 
/* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar . . . */
if ( $.inArray( mw.config.get( 'wgAction' ), [ 'edit', 'submit' ] ) !== -1 ) {
	mw.loader.using( 'user.options', function () {
		if ( mw.user.options.get( 'usebetatoolbar' ) && mw.user.options.get( 'showtoolbar' ) ) {
			mw.loader.using( 'ext.wikiEditor.toolbar', function () {
				$( customizeToolbar );
			} );
		}
	} );
}
mw.hook( 'ext.lqt.textareaCreated' ).add( customizeToolbar );

}( jQuery, mediaWiki ) );