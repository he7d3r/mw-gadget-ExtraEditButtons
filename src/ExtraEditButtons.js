if('undefined' === typeof $j.fn.wikiEditor) {
	addOnloadHook(function () { jsMsg('O objeto $j.fn.wikiEditor não está definido!'); });
}
$j(document).ready( function() {
	var edit = $j( '#wpTextbox1' );
	if ( /^Helder\.wiki(\.bot)?$/.test( wgUserName ) ) {
		edit.wikiEditor( 'removeFromToolbar', { 'section': 'main', 'group': 'insert', 'tool': 'linkCGD' } )
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
					icon: 'http://upload.wikimedia.org/wikipedia/commons/2/27/Vector_toolbar_signature_button.png',
					action: {
						type: 'callback',
						execute: function() {
							var proj = ( wgServer.indexOf("wikibooks") > -1) ? '' : 'b:';
							var lang = ( "pt" === wgContentLanguage ) ? '' : 'pt:';
							if ( !proj && lang ) proj = ':';
							edit.text( function(index) {
								var reOldSign = window.reOldSign || /OLDSIGNATURE/g;
								var newSign = '[[' + proj + lang + 'User:Helder.wiki|Helder]]';
								this.value = this.value.replace( reOldSign, newSign );
							} );
							$j( '#wpMinoredit' ).attr('checked', true);
							$j( '#wpDiff' ).submit();
							$j( '#wpSummary' ).text( 'Fixing links (my user account was renamed)' );
						}
					}
				}
			}
		} );
	}
	edit.wikiEditor( 'addToToolbar', {
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
				icon: 'http://upload.wikimedia.org/wikipedia/commons/2/23/Button_code.png',
				action: {
					type: 'encapsulate',
					options: { pre: "<code>", post: "</code>" }
				}
			},
			'my-pre': {
				label: 'Código pré-formatado',
				type: 'button',
				icon: 'http://upload.wikimedia.org/wikipedia/commons/3/3c/Button_pre.png',
				action: {
					type: 'encapsulate',
					options: { pre: "<pre>", post: "</pre>" }
				}
			},
			'my-source': {
				label: 'Código-fonte',
				type: 'button',
				icon: 'http://upload.wikimedia.org/wikipedia/commons/d/d2/Button_source.png',
				action: {
					type: 'encapsulate',
					options: { pre: "<syntaxhighlight lang=>", post: "</syntaxhighlight>" }
				}
			},
			'my-comment': {
				label: 'Comentário',
				type: 'button',
				icon: 'http://upload.wikimedia.org/wikipedia/commons/3/3b/Comment-button-bg.png',
				action: {
					type: 'encapsulate',
					options: { pre: "<!-- ", post: " -->" }
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
						icon: 'http://upload.wikimedia.org/wikipedia/commons/d/d8/Sad.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Sad.png]]" }
						}
					},
					'smile': {
						label: 'Sorriso',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/2/26/Smile.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Smile.png]]" }
						}
					},
					'teeth': {
						label: 'Sorridente',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/7/72/Teeth.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Teeth.png]]" }
						}
					},
					'tongue': {
						label: 'Levado',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/c/c4/Tongue.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Tongue.png]]" }
						}
					},
					'confused': {
						label: 'Confuso',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/6/68/Confused.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Confused.png]]" }
						}
					},
					'cry': {
						label: 'Lágrimas',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/d/d8/Cry.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Cry.png]]" }
						}
					},
					'wink': {
						label: 'Piscando',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/9/9a/Wink.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Wink.png]]" }
						}
					},
					'sleeping': {
						label: 'Dormindo',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/3/38/Sleeping.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Sleeping.png|27px]]" }
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
						icon: 'http://upload.wikimedia.org/wikipedia/commons/c/c8/Button_conserver2.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Symbol support vote.svg|15px]] '''Concordo'''" }
						}
					},

					'disagree': {
						label: 'Discordo',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/0/00/Button_supprimer.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Symbol oppose vote.svg|15px]] '''Discordo'''" }
						}
					},
					'done': {
						label: 'Feito',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/4/4e/Button_fait2.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Yes check.svg|15px]] '''Feito'''" }
						}
					},
					'comment': {
						label: 'Comentário',
						type: 'button',
						icon: 'http://upload.wikimedia.org/wikipedia/commons/4/4d/Button_reticence.png',
						action: {
							type: 'encapsulate',
							options: { pre: "[[Image:Symbol comment vote.svg|15px]] '''Comentário'''" }
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
			'my-red': {
				label: 'Texto vermelho',
				type: 'button',
				icon: 'http://upload.wikimedia.org/wikipedia/commons/8/8d/Button_rouge.png',
				action: {
					type: 'encapsulate',
					options: { pre: '<span style="color:red">', post: "</span>" }
				}
			}
		}
	} );

	if ( "http://pt.wikibooks.org" === wgServer ) {
		edit.wikiEditor( 'addToToolbar', {
			'sections': {
				'admin': {
					'type': 'toolbar',
					'label': 'Administração'
				}
			}
		} )
		.wikiEditor( 'addToToolbar', {
			'section': 'admin',
			'groups': {
				'delete': {
					'label': 'Eliminação',
					'tools': {
						'er': {
							label: 'Eliminação Rápida',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/1/11/Button_ER.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{ER|motivo", post: "|~~" + "~~}}\n" }
							}
						},
						'teste': {
							label: 'Teste feito fora da caixa de areia',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/4/40/Wiki_test.GIF',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{ER|Teste feito fora da página adequada ([[Wikilivros:Caixa de areia]])", post: "|~~" + "~~}}\n" }
							}
						},
						'spam': {
							label: 'SPAM',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/3/3d/ButtonSpam.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{ER|SPAM", post: "|~~" + "~~}}\n" }
							}
						},
						'exer': {
							label: 'Pedido de resolução de exercícios',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/1/11/Button_Nuvola_apps_edu_lang.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{ER|Pedido de resolução de exercícios", post: "|~~" + "~~}}\n" }
							}
						},
						'propor': {
							label: 'Propor eliminação da página/imagem',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/9/9f/Button_broom3.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{Eliminação", post: "}}\n" }
							}
						},
						'vda': {
							label: 'Violação dos direitos de autor',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/7/75/Wiki_c_copy.gif',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{VDA|1=", post: "}}\n" }
							}
						},
						'pedia': {
							label: 'Inadequado: Conteúdo enciclopédico',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/c/cb/Button_wikipedia.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{Inadequado|Conteúdo enciclopédico|[[w:", post: "]]|~~" + "~~}}\n" }
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
							icon: 'http://upload.wikimedia.org/wikipedia/commons/3/30/Bv_icon.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{subst:bv}}", post: " ~~" + "~~\n" }
							}
						},
						'bv-ip': {
							label: 'Boas-vindas para usuário anônimo',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/5/54/Bvip_icon.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{subst:bv-ip}}", post: " ~~" + "~~\n" }
							}
						},
						'bv-av': {
							label: 'Boas-vindas e aviso',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/e/ec/Button_aviso.png',
							action: {
								type: 'encapsulate',
								options: { pre: "{/**/{subst:bv-av|", post: "}} ~~" + "~~\n" }
							}
						}
					}
				}
			}
		} );
	} else {
		edit.wikiEditor( 'addToToolbar', {
			'section': 'main',
			'group': 'insert',
			'tools': {
				'my-math': {
					label: 'Fórmula matemática',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/7/7d/Button_equation_he.png',
					action: {
						type: 'encapsulate',
						options: { pre: "<math>", post: "</math>" }
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
					icon: 'http://upload.wikimedia.org/wikipedia/commons/c/c9/Button_strike.png',
					action: {
						type: 'encapsulate',
						options: { pre: "<s>", post: "</s>" }
					}
				}
			}
		} );
	}
} );