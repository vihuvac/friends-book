//
//  SubWebView.swift
//  FriendsBook
//
//  Created by Victor Valle-Castillo on 2024-06-11.
//

import WebKit
import UIKit

class SubWebView: WKWebView {
  override func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool {
    return false
  }
}
