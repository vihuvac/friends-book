//
//  CoolWebView.swift
//  FriendsBook
//
//  Created by Victor Valle-Castillo on 2024-06-10.
//

import UIKit
import WebKit

@objc(CoolWebView)
class CoolWebView: UIView {
  @objc var webView: SubWebView!
  @objc var htmlString: NSString = "<html><html>" {
    didSet {
      webView.loadHTMLString(htmlString as String, baseURL: Bundle.main.bundleURL)
    }
  }
  
  @objc var onComment: RCTDirectEventBlock?
  @objc var onHighlight: RCTDirectEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    webView = SubWebView(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height))
    webView.isOpaque = false
    
    self.addSubview(webView)
    
    let comment = UIMenuItem(title: "Comment", action: #selector(addComment))
    let highlight = UIMenuItem(title: "Highlight", action: #selector(addHighlight))
    
    UIMenuController.shared.menuItems = [comment, highlight]
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool {
    if action == #selector(addComment) {
      return true
    }
    
    if action == #selector(addHighlight) {
      return true
    }
    
    return false
  }
  
  @objc func addComment() {
    onComment!(["key": "comment"])
  }
  
  @objc func addHighlight() {
    onComment!(["key": "highlight"])
  }
}
