'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">salad-bar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-71bab50b66f112c9bc24ce9d60e135df9820acbbb6fe58f7fdba1aa42d5239e4807a3d893b60138376d5f9143bf1e18f406b852f584f45235eadde33ad836145"' : 'data-bs-target="#xs-components-links-module-AppModule-71bab50b66f112c9bc24ce9d60e135df9820acbbb6fe58f7fdba1aa42d5239e4807a3d893b60138376d5f9143bf1e18f406b852f584f45235eadde33ad836145"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-71bab50b66f112c9bc24ce9d60e135df9820acbbb6fe58f7fdba1aa42d5239e4807a3d893b60138376d5f9143bf1e18f406b852f584f45235eadde33ad836145"' :
                                            'id="xs-components-links-module-AppModule-71bab50b66f112c9bc24ce9d60e135df9820acbbb6fe58f7fdba1aa42d5239e4807a3d893b60138376d5f9143bf1e18f406b852f584f45235eadde33ad836145"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KitchenModule.html" data-type="entity-link" >KitchenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-KitchenModule-251558261ce353bdfe72178da1fdce99177a13726e3fb10cbaa3604dd4e16e0f93af1699f515863bb6233e346c010738110034984bef7bda0d7bf9bb475d69ab"' : 'data-bs-target="#xs-components-links-module-KitchenModule-251558261ce353bdfe72178da1fdce99177a13726e3fb10cbaa3604dd4e16e0f93af1699f515863bb6233e346c010738110034984bef7bda0d7bf9bb475d69ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-KitchenModule-251558261ce353bdfe72178da1fdce99177a13726e3fb10cbaa3604dd4e16e0f93af1699f515863bb6233e346c010738110034984bef7bda0d7bf9bb475d69ab"' :
                                            'id="xs-components-links-module-KitchenModule-251558261ce353bdfe72178da1fdce99177a13726e3fb10cbaa3604dd4e16e0f93af1699f515863bb6233e346c010738110034984bef7bda0d7bf9bb475d69ab"' }>
                                            <li class="link">
                                                <a href="components/KitchenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KitchenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/KitchenRoutingModule.html" data-type="entity-link" >KitchenRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaladModule.html" data-type="entity-link" >SaladModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SaladModule-81a5d6167502f2714bc8f41dbc8ec3adf69dccd70da727df7a0d83a7312e549efa27b767ef28918add7ad6b88d9fb80e4f10860fbc359f51f768967d3cceab4a"' : 'data-bs-target="#xs-components-links-module-SaladModule-81a5d6167502f2714bc8f41dbc8ec3adf69dccd70da727df7a0d83a7312e549efa27b767ef28918add7ad6b88d9fb80e4f10860fbc359f51f768967d3cceab4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaladModule-81a5d6167502f2714bc8f41dbc8ec3adf69dccd70da727df7a0d83a7312e549efa27b767ef28918add7ad6b88d9fb80e4f10860fbc359f51f768967d3cceab4a"' :
                                            'id="xs-components-links-module-SaladModule-81a5d6167502f2714bc8f41dbc8ec3adf69dccd70da727df7a0d83a7312e549efa27b767ef28918add7ad6b88d9fb80e4f10860fbc359f51f768967d3cceab4a"' }>
                                            <li class="link">
                                                <a href="components/SaladComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToppingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaladRoutingModule.html" data-type="entity-link" >SaladRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedMaterialModule.html" data-type="entity-link" >SharedMaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToppingsService.html" data-type="entity-link" >ToppingsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topping.html" data-type="entity-link" >Topping</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});